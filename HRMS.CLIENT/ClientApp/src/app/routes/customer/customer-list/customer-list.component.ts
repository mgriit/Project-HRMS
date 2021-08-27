import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('customer_list_table.name'),
      field: 'name',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('customer_list_table.phone'),
      field: 'phone',
      sortable: true,
      disabled: false,
      minWidth: 100,
    },
    {
      header: this.translate.stream('customer_list_table.email'),
      field: 'email',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('customer_list_table.address'),
      field: 'address',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('customer_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '120px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('customer_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('customer_list_table.delete'),
          tooltip: this.translate.stream('customer_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('customer_list_table.confirm_delete'),
          popCloseText: this.translate.stream('customer_list_table.close'),
          popOkText: this.translate.stream('customer_list_table.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];
  private customersSub: Subscription;
  private spinnerSub: Subscription;

  isLoading=false;
  listData= [];
  mainList=[];
  searchKey: string;

  constructor(private customerService: CustomerService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.customerService.getCustomers();
    this.customersSub = this.customerService
      .getCustomerUpdateListener()
      .subscribe((customerData: { customers: Customer[] }) => {
        this.isLoading=false;
        this.mainList = customerData.customers;
        this.listData=this.mainList;
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.listData = this.mainList;
  }

  applyFilter() {
    this.listData = this.filter(this.mainList);
  }

  filter(data:any){
    return data.filter(obj=>{
        return obj.name.toLowerCase().includes(this.searchKey) ||
        obj.phone.toLowerCase().includes(this.searchKey)
      }
    )
  }

  edit(value: any) {
    this.router.navigate(['/customer/edit', value.id ]);
  }

  delete(value: any) {
    this.isLoading=true;

    this.customerService.deleteCustomer(value.id).subscribe(() => {
      this.customerService.getCustomers();
    }, () => {
      this.isLoading=false;
    });
  }
  ngOnDestroy(){
    this.customersSub.unsubscribe();
  }
}
