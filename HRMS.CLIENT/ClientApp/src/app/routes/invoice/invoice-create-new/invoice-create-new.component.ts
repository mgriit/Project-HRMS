import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MtxDialog } from '@ng-matero/extensions';
import { DropdownItem } from '@shared/models/dropdown-item';
import { CategoryService } from 'app/routes/category/category.service';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';
import * as printJS from 'print-js';
import { concat, Observable, of, Subject, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Customer } from '../../customer/customer.model';
import { CustomerService } from '../../customer/customer.service';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';
import { InvoiceService } from '../invoice.service';
import { ModalCustomerCreateComponent } from '../modal-customer-create/modal-customer-create.component';
import { InvoiceItem } from '../model/invoice-item';
import { InvoiceItems } from '../model/invoice-items';

@Component({
  selector: 'app-invoice-create-new',
  templateUrl: './invoice-create-new.component.html',
  styleUrls: ['./invoice-create-new.component.scss']
})
export class InvoiceCreateNewComponent implements OnInit {

  private id: any;
  public mode: string;
  isLoading=false;
  public item =null;

  private mainProduct:Product[]=[];
  public products:Product[]=[];

  public categories: DropdownItem[]=[];

  customerBuffer = [];
  bufferSize = 20;
  loading = false;
  input$ = new Subject<string>();


  public invoice : InvoiceItems = new InvoiceItems();


  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private invoiceService: InvoiceService,
    private categoryService: CategoryService,
    private toastr: ToastrService,
    public dialog: MtxDialog,
    private router: Router,
    public route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  displayedColumns: string[] = ['name', 'category','supplier','description','stock','price','quantity','unit','total','actions'];
  dataSource = new MatTableDataSource(this.invoice.invoiceItems);

  ngOnInit() {

    this.isLoading=true;

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.invoiceService.getInvoice(this.id).subscribe(data => {
          this.invoice=data;
          this.dataSource = new MatTableDataSource(this.invoice.invoiceItems);

          this.customerBuffer=[...this.customerBuffer,
            {
              id: this.invoice.customerId,
              name: this.invoice.name+'('+ this.invoice.mobile + ')',
              phone: this.invoice.mobile,
              email: this.invoice.email,
              address: this.invoice.address
            }
          ]
          this.cdr.detectChanges();
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });


    this.customerService.getCustomersShort(0,this.bufferSize,null).subscribe(data=>{
      this.customerBuffer = data;
    });

    this.onSearch();

    this.productService.getProducts();
    this.productService.getProductUpdateListener()
    .subscribe((productData: { products: Product[]; count: number }) => {
      this.isLoading=false;
      this.mainProduct = productData.products;
      this.products = this.mainProduct;
    });

    this.categoryService.getCategoriesShort().subscribe(data=>{
      this.categories=data;
    })
  }

  onChangeCustomer(customer){
    if(customer){
      this.invoice.mobile=customer.phone;
      this.invoice.email=customer.email;
      this.invoice.address=customer.address;
    }
    else{
      this.invoice.mobile=null;
      this.invoice.email=null;
      this.invoice.address=null;
    }
  }

  onChangeItem(fg: any,s){
    if(!fg){
      return;
    }

    if(fg.stock < 1){
      s.ngSelect.clearModel();
      s.ngSelect.blur();
      return;
    }

    let item = this.invoice.invoiceItems.find(x=>x.id==fg.id)
    if(item){
      item.quantity++;
      item.SetTotal();
    }
    else{
      this.invoice.addItem(new InvoiceItem(fg.id,fg.name,fg.categoryName,fg.supplierName,fg.description,fg.stock,fg.price,fg.bprice,1,fg.unit));
      this.dataSource=new MatTableDataSource(this.invoice.invoiceItems);
    }
    this.invoice.calculateTotal();
    s.ngSelect.clearModel();
    s.ngSelect.blur();
  }

  onRemoveItem(index){
    this.invoice.removeItem(index)
    this.dataSource=new MatTableDataSource(this.invoice.invoiceItems);
    this.invoice.calculateTotal();
  }

  onQtyChange(item){
    item.SetTotal();
    this.invoice.calculateTotal();
  }

  saveInvoice(f:NgForm,print: boolean){
    if(f.invalid){
      this.toastr.error('Invalid invoice data');
      return;
    }

    if(this.invoice.invoiceItems.length < 1)
    {
      this.toastr.error('No item found in invoice');
      return;
    }

    if(this.mode=="create"){
      this.isLoading=true;
      this.invoiceService.postInvoice(this.invoice).subscribe(res=>{

        if(print)
          this.printTable();

        this.isLoading=false;
        this.toastr.success('Invoice has been saved successfully');
        f.reset();
        this.reset();
      });
    }
    else{
      this.isLoading=true;
      this.invoiceService.updateInvoice(this.invoice).subscribe(res=>{
        this.isLoading=false;
        if(print)
          this.printTable();

        this.toastr.success('Invoice has been updated successfully');
        this.router.navigate(['/invoice/list']);
      });
    }
  }


  private reset(){
    this.invoice = new InvoiceItems()
    this.dataSource = new MatTableDataSource(this.invoice.invoiceItems);
  }

  fetchMore(term) {
    const len = this.customerBuffer.length;
    this.loading = true;
    this.customerService.getCustomersShort(len, this.bufferSize + len, term).subscribe(data=>{
       this.customerBuffer = this.customerBuffer.concat(data);
       this.loading = false;
    })
  }

  onSearch() {

    this.input$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(()=>this.loading=true),
      switchMap(term =>  this.customerService.getCustomersShort(0,this.bufferSize,term))
    )
    .subscribe(data => {
      this.customerBuffer = data;
      this.loading=false;
    })
  }

  onFilterCategory(event:any){
    if(event){
      this.products=[...this.mainProduct].filter(function(data) {
        return data.categoryName == event.name
      });
    }
    else
      this.products = this.mainProduct;
  }

  setPaid(){
    this.invoice.paid = this.invoice.lineTotal-(this.invoice.discount||0)
  }

  onCreateCustomer(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";

    this.dialog.originalOpen(ModalCustomerCreateComponent,dialogConfig).afterClosed().subscribe((data: any)=>{
      if(data){
        this.toastr.success('Customer has been added successfully');
        this.customerBuffer=[...this.customerBuffer,
          {
            id: data.customer.dataValues.id,
            name: data.customer.dataValues.name+'('+ data.customer.dataValues.phone + ')',
            phone: data.customer.dataValues.phone,
            email: data.customer.dataValues.email,
            address: data.customer.dataValues.address
          }
        ]
        this.invoice.customerId = data.customer.id;
        this.invoice.email = data.customer.dataValues.email;
        this.invoice.mobile = data.customer.dataValues.phone;
        this.invoice.address = data.customer.dataValues.address;
      }
    });
  }


  public printTable() {
    let ele: HTMLElement= document.getElementById('pibutton') as HTMLElement;
    ele.click();
  }
}

