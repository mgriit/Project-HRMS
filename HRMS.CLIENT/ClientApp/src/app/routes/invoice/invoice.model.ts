import { IinvoiceItem } from "./invoice-item";

export interface Iinvoice {
    id: number;
    date: string;
    customerId: number;
    customerName : string;
    customerPhone : string;
    items:IinvoiceItem[];
    total: number;
    grantTotal: number;
    discount: number;
    due : number;
    status : number
  }
