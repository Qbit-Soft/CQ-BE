import { ObjectId } from "mongodb";

export interface EAN {
    _: string;
    schemeID: string;
    schemeName: string;
    schemeAgencyID: string;
}

export interface Item {
    itemDescription: string;
    quantity: number;
    unitPrice: number;
    ean: EAN;
}

export interface Identification {
    _: string;
    schemeID: string;
    schemeName: string;
    schemeAgencyID: string;
    schemeAgencyName: string;
}

export interface Invoice {
    _id?: ObjectId;
    invoiceNumber: string;
    issueDate: string;
    dueDate: string;
    orderNumber: string;
    supplierName: string;
    supplierIdentification: Identification;
    supplierAddress: string;
    customerName: string;
    customerIdentification: Identification;
    customerAddress: string;
    items: Item[];
}
