import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { InvoiceService } from '../invoice.service';
import { ModalUpdatePaymentComponent } from '../modal-update-payment/modal-update-payment.component';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('invoice_list_table.id'),
      field: 'id',
      showExpand: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.date'),
      field: 'date',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.customerName'),
      field: 'customerName',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.customerPhone'),
      field: 'customerPhone',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.total'),
      field: 'total',
      type: 'number',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.discount'),
      field: 'discount',
      type: 'number',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.due'),
      field: 'due',
      type: 'number',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.grandTotal'),
      field: 'grandTotal',
      type: 'number',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.status'),
      field: 'status',
      minWidth: 100
    },
    {
      header: this.translate.stream('invoice_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '160px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('invoice_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('invoice_list_table.delete'),
          tooltip: this.translate.stream('invoice_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('invoice_list_table.confirm_delete'),
          popCloseText: this.translate.stream('invoice_list_table.close'),
          popOkText: this.translate.stream('invoice_list_table.ok'),
          click: record => this.delete(record),
        },
        {
          type: 'icon',
          icon: 'reply',
          tooltip: this.translate.stream('invoice_list_table.return'),
          pop: true,
          popTitle: this.translate.stream('invoice_list_table.confirm_return'),
          popCloseText: this.translate.stream('invoice_list_table.close'),
          popOkText: this.translate.stream('invoice_list_table.ok'),
          click: record => this.return(record),
        },
      ],
    },
  ];


  columns2: MtxGridColumn[] = [
    {
      header: this.translate.stream('invoice_list_table.productName'),
      field: 'productName',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.quantity'),
      field: 'quantity',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.unit'),
      field: 'unit',
      minWidth: 100,
    },
    {
      header: this.translate.stream('invoice_list_table.unitCost'),
      field: 'unitCost',
      minWidth: 100,
    }
  ];

  private invoicesSub: Subscription;
  isLoading=false;
  listData  = [];
  searchKey: string;
  total=0;

  query = {
    searchOn:'order.id',
    q: null,
    sortBy: 'order.id',
    derection: 'desc',
    page: 0,
    per_page: 10,
    from: null,
    to: null,
    status: '0'
  };

  constructor(private invoiceService: InvoiceService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private toastr: ToastrService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
    this.invoicesSub = this.invoiceService
      .getInvoiceUpdateListener()
      .subscribe((invoiceData: any) => {
        this.listData = invoiceData.invoices;
        this.total= invoiceData.count;
        this.isLoading=false;
    });
  }

  edit(value: any) {
    this.router.navigate(['/invoice/edit', value.id ]);
  }

  delete(value: any) {
    this.isLoading=true;
    this.invoiceService.deleteInvoice(value.id).subscribe(() => {
      this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
    }, () => {
      this.isLoading=false;
    });
  }

  return(value: any){
    if(value.status==3){
      this.toastr.info('This invoice is already returned');
      return;
    }
    this.isLoading=true;
    this.invoiceService.returnInvoice(value.id).subscribe((data) => {
      this.toastr.success(data['message']);
      this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
    }, () => {
      this.isLoading=false;
    });
  }

  updatePayment(value: any){
    if(value.status==3){
      this.toastr.info(`You can't adjust a returned invoice`);
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    dialogConfig.data=value;
    this.dialog.originalOpen(ModalUpdatePaymentComponent,dialogConfig).afterClosed().subscribe((confirmed: boolean)=>{
      if(confirmed){
        this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
      }
    });
  }

  getNextPage(e: PageEvent) {
    this.query.page = e.pageIndex;
    this.query.per_page = e.pageSize;
    this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
  }

  search(f:any){
    console.log(f.form.invalid);
    if(f.form.invalid){
      this.toastr.error("Pleaze enter the valid filter parameters");
      return;
    }
    if(this.query.from > this.query.to)
    {
      this.toastr.error("Date From must have be smaller than Date To");
      return;
    }
    this.query.page = 0;
    this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
  }

  resetSearch(){
    this.query.page = 0;
    this.query.searchOn='order.id';
    this.query.q = '';
    this.query.derection= 'desc';
    this.query.from = null;
    this.query.to = null;
    this.query.status='0';
    this.invoiceService.getInvoices(this.query.per_page,(this.query.page+1),this.query.searchOn,this.query.q,this.query.sortBy,this.query.derection,this.query.from,this.query.to,this.query.status);
  }

  onExpand(e:any)
  {
    this.invoiceService.getServicesOfInvoice(this.listData[e.index].id).subscribe(data=>{
      this.listData[e.index].items=data;
    });
  }

  ngOnDestroy(){
    this.invoicesSub.unsubscribe();
  }
}
