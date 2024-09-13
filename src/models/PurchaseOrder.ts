import { ObjectId } from "mongodb";

export interface Order {
    orderNumber: string;
    orderDate: string;
    deliveryMaxDate: string;
    deliveryMinDate: string;
    supplier: string;
}

export interface Item {
    ean: string;  // EAN is a string
    description: string;
    quantity: number;
    price: number;
}

export interface PurchaseOrder {
    _id?: ObjectId;  // MongoDB ObjectId
    order: Order;
    items: Item[];
    createdAt?: Date;
}
