import { Request, Response } from 'express';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';
import OrdenCompra from '../models/OrdenCompra';
import { PDFDocument } from 'pdf-lib';
import pdfParse from 'pdf-parse';


//HSE Converter
// Configuring formidable
const form = formidable({
  multiples: false, // do not allow multiple files
  keepExtensions: true, // keep original file extensions
  uploadDir: path.join(__dirname, '../../uploads'), // directory to save uploaded files
});

// Controller to handle file upload and conversion
export const convertController = async (req: Request, res: Response): Promise<void> => {
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error uploading the file:', err);
      res.status(500).send(`Error uploading the file: ${err.message}`);
      return;
    }

    console.log('Files:', files);
    console.log('Fields:', fields);

    const fileArray = files[''] as File[] | undefined;
    const file = fileArray && fileArray.length > 0 ? fileArray[0] : undefined;

    if (!file) {
      console.error('No file was uploaded.');
      res.status(400).send('No file was uploaded.');
      return;
    }

    try {
      const data = fs.readFileSync(file.filepath, 'utf8');
      const jsonResult = parseHSE(data);
      const jsonFilePath = path.join(__dirname, '../../uploads', `${path.parse(file.originalFilename || 'output').name}.json`);

      fs.writeFileSync(jsonFilePath, JSON.stringify(jsonResult, null, 2));

      const newOrder = new OrdenCompra({
        orderNumber: fields.orderNumber,
        supplier: fields.supplier,
        items: fields.items,
        uploadedFile: jsonFilePath
      });

      await newOrder.save();

      console.log('JSON file saved successfully:', jsonFilePath);
      res.json({
        message: 'Purchase order created, and HSE file converted and saved as JSON successfully.',
        fields,
        jsonFilePath
      });
    } catch (err) {
      console.error('Error processing the purchase order:', err);
      res.status(500).send('Error processing the purchase order.');
    }
  });
};

export const parseHSE = (contents: string): any => {
  const lines = contents.split('\n');
  const json: any = {};

  lines.forEach(line => {
    const segments = line.split(/\s+/).filter(Boolean);
    if (segments.length > 1) {
      const key = segments[0];
      const value = segments.slice(1).join(' ').trim();
      if (!json[key]) {
        json[key] = [];
      }
      json[key].push(value);
    }
  });

  return json;
};


//Pdf Splitter
export const splitPdf = async (inputPath: string): Promise<void> => {
    try {
      // Read the PDF file
      const pdfBytes = fs.readFileSync(inputPath);
      const pdfDoc = await PDFDocument.load(pdfBytes);
  
      // Get the number of pages
      const numPages = pdfDoc.getPageCount();
  
      for (let i = 0; i < numPages; i++) {
        // Create a new PDF document for the current page
        const newPdfDoc = await PDFDocument.create();
  
        // Copy the current page from the original document
        const [page] = await newPdfDoc.copyPages(pdfDoc, [i]);
        newPdfDoc.addPage(page);
  
        // Save the new PDF with the page
        const newPdfBytes = await newPdfDoc.save();
  
        // Create a temporary document with the page to extract the text
        const tempPdfDoc = await PDFDocument.create();
        const [tempPage] = await tempPdfDoc.copyPages(newPdfDoc, [0]);
        tempPdfDoc.addPage(tempPage);
  
        const tempPdfBytes = await tempPdfDoc.save();
        const pdfData = await pdfParse(tempPdfBytes); // Extract text from the single page
  
        // Search for the line containing "Orden de Compra :"
        const keyword = 'Orden de Compra :';
        let fileName = pdfData.text.split('\n').find((line: string) => line.includes(keyword));
  
        if (fileName) {
          // Extract the number after "Orden de Compra :"
          const regex = /Orden de Compra :\s*(\d+)/;
          const match = fileName.match(regex);
          fileName = match ? match[1].trim() : `output_page_${i + 1}`;
        } else {
          fileName = `output_page_${i + 1}`;
        }
  
        // Clean the file name of illegal characters
        fileName = fileName.replace(/[\/\\:<>?"*|]/g, '');
  
        // Save the new PDF with the correct name
        fs.writeFileSync(`${fileName}.pdf`, newPdfBytes);
      }
    } catch (err) {
      console.error('Error processing the PDF:', err);
    }
  };