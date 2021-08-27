import { InvoiceItem } from "./invoice-item";

export class InvoiceItems {
  public id: number;

  public customerId : number;

  public name: string;

  public date: Date;

  public mobile : string;

  public email : string;

  public address : string;

  public lineTotal : number;

  public lineBTotal: number;

  public discount: number;

  public paid : number;

  public invoiceItems : InvoiceItem[]=[];

  constructor(){
    this.date=new Date();
    this.lineTotal = 0;
    this.lineBTotal = 0;
  }

  public addItem(inv: InvoiceItem){
    this.invoiceItems.push(inv);
  }

  public removeItem(index){
    this.invoiceItems.splice(index,1)
  }

  public calculateTotal(){
    this.lineTotal = 0;
    this.lineBTotal = 0;
    this.invoiceItems.forEach(element => {
      this.lineTotal += element.total;
      this.lineBTotal += element.btotal;
    })
  }
}
