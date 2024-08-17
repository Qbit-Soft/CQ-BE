import { Request, Response } from 'express';
import formidable, { File } from 'formidable';
import fs from 'fs';
import path from 'path';

// Configuración de formidable
const form = formidable({
  multiples: false, // no permite múltiples archivos
  keepExtensions: true, // mantiene las extensiones originales de los archivos
  uploadDir: path.join(__dirname, '../../uploads'), // directorio donde se suben los archivos
});

// Controlador para convertir el archivo subido
export const convertController = (req: Request, res: Response): void => {
  // analiza la solicitud con formidable
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error subiendo el archivo:', err);
      res.status(500).send(`Error subiendo el archivo: ${err.message}`);
      return; 
    }

    // verificar lo que formidable recibe
    console.log('Files:', files);
    console.log('Fields:', fields);

    // acceder al archivo subido, verificando si existe
    const fileArray = files[''] as File[] | undefined;
    const file = fileArray && fileArray.length > 0 ? fileArray[0] : undefined;

    if (!file) {
      console.error('No se subió ningún archivo.');
      res.status(400).send('No se subió ningún archivo.');
      return;
    }

    console.log('Archivo subido exitosamente:', file.originalFilename);

    // leer el contenido del archivo subido
    fs.readFile(file.filepath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error leyendo el archivo:', err);
        res.status(500).send('Error leyendo el archivo.');
        return;
      }

      // parsear el contenido del archivo HSE a JSON
      const jsonResult = parseHSE(data);
      console.log('JSON parseado:', jsonResult);

      // guardar el JSON en un archivo
      const jsonFilePath = path.join(__dirname, '../../uploads', `${path.parse(file.originalFilename || 'output').name}.json`);
      fs.writeFile(jsonFilePath, JSON.stringify(jsonResult, null, 2), (err) => {
        if (err) {
          console.error('Error guardando el archivo JSON:', err);
          res.status(500).send('Error guardando el archivo JSON.');
          return;
        }

        console.log('Archivo JSON guardado exitosamente:', jsonFilePath);
        res.json({
          message: 'Archivo HSE convertido y guardado como JSON exitosamente.',
          fields, // incluir campos en la respuesta si es necesario
          jsonFilePath // ruta del archivo JSON guardado
        });
      });
    });
  });
};

// función para parsear el contenido del archivo HSE a JSON
export const parseHSE = (contents: string): any => {
  const lines = contents.split('\n'); // dividir el contenido en líneas
  const json: any = {};

  lines.forEach(line => {
    const segments = line.split(/\s+/).filter(Boolean); // dividir la línea en segmentos y eliminar vacíos
    if (segments.length > 1) { // verificar que la línea tenga datos
      const key = segments[0]; // aa primera parte es la clave
      const value = segments.slice(1).join(' ').trim(); // el resto es el valor
      if (!json[key]) {
        json[key] = []; // crear una lista para la clave si no existe
      }
      json[key].push(value); // agregar el valor a la lista
    }
  });

  return json;
};
