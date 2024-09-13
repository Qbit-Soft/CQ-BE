export interface PurchaseOrder {
  order: {
      orderNumber: string;
      orderDate: string;
      deliveryMaxDate: string;
      deliveryMinDate: string;
      supplier: string;
  };
  items: Array<{
      ean: string;
      description: string;
      quantity: number;  // quantity is an integer
      price: number;     // price is a float (double)
  }>;
}
