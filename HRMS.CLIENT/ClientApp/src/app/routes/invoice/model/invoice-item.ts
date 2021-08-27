export class InvoiceItem {
  public total : number;
  public btotal: number;
  constructor(
    public id: number,
    public name: string,
    public category: string,
    public supplier: string,
    public description: string,
    public stock: number,
    public price: number,
    public bprice : number,
    public quantity: number,
    public unit : string
  ){
    this.total = this.price * this.quantity;
    this.btotal = this.quantity * this.bprice;
  }

  public SetTotal(){
    this.total = this.quantity*this.price;
    this.btotal = this.quantity*this.bprice;
  }
}
