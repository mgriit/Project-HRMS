import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Supplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit, OnDestroy {

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('supplier_list_table.name'),
      field: 'name',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('supplier_list_table.phone'),
      field: 'phone',
      sortable: true,
      disabled: false,
      minWidth: 100,
    },
    {
      header: this.translate.stream('supplier_list_table.email'),
      field: 'email',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('supplier_list_table.address'),
      field: 'address',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('supplier_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '120px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('supplier_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('supplier_list_table.delete'),
          tooltip: this.translate.stream('supplier_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('supplier_list_table.confirm_delete'),
          popCloseText: this.translate.stream('supplier_list_table.close'),
          popOkText: this.translate.stream('supplier_list_table.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];
  private suppliersSub: Subscription;
  private spinnerSub: Subscription;

  isLoading=false;
  listData= [];
  mainList=[];
  searchKey: string;

  constructor(private supplierService: SupplierService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.supplierService.getSuppliers(10, 1);
    this.suppliersSub = this.supplierService
      .getSupplierUpdateListener()
      .subscribe((supplierData: { suppliers: Supplier[]; count: number }) => {
        this.isLoading=false;
        this.mainList = supplierData.suppliers;
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
    this.router.navigate(['/supplier/edit', value.id ]);
  }

  delete(value: any) {
    this.isLoading=true;

    this.supplierService.deleteSupplier(value.id).subscribe(() => {
      this.supplierService.getSuppliers(10,1);
    }, () => {
      this.isLoading=false;
    });
  }
  ngOnDestroy(){
    this.suppliersSub.unsubscribe();
  }
}
