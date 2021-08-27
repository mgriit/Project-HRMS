import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NgForm} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { StockUpdateComponent } from '../stock-update/stock-update.component';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy{

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('product_list_table.name'),
      field: 'name',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.categoryName'),
      field: 'categoryName',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.stock'),
      field: 'stock',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.unit'),
      field: 'unit',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.bprice'),
      field: 'bprice',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.price'),
      field: 'price',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.description'),
      field: 'description',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.supplierName'),
      field: 'supplierName',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('product_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '160px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'add_box',
          tooltip: this.translate.stream('product_list_table.edit'),
          click: record => this.onStockUpdate(record),
        },
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('product_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('product_list_table.delete'),
          tooltip: this.translate.stream('product_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('product_list_table.confirm_delete'),
          popCloseText: this.translate.stream('product_list_table.close'),
          popOkText: this.translate.stream('product_list_table.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];

  isLoading=false;
  mainList = [];
  listData  = [];
  searchKey: string;
  private productsSub: Subscription;

  constructor(private productService: ProductService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.productService.getProducts();
    this.productsSub = this.productService
      .getProductUpdateListener()
      .subscribe((productData: { products: Product[]; count: number }) => {
        this.mainList = productData.products;
        this.listData=this.mainList;
        this.isLoading=false;
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
        return obj.name.toLowerCase().includes(this.searchKey)
        || obj.categoryName.toLowerCase().includes(this.searchKey)
        || obj.unit.toLowerCase().includes(this.searchKey)
        || obj.supplierName.toLowerCase().includes(this.searchKey)
      }
    )
  }

  edit(value) {
    this.router.navigate(['/product/edit', value.id ]);
  }

  delete(value) {
    this.isLoading=true;
    this.productService.deleteProduct(value.id).subscribe(() => {
      this.productService.getProducts();
    }, () => {
      this.isLoading=false;
    });
  }

  onStockUpdate(item: Product){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.data=item;
    this.dialog.originalOpen(StockUpdateComponent,dialogConfig).afterClosed().subscribe((confirmed: boolean)=>{
      if(confirmed){
        this.productService.getProducts();
      }
    });
  }

  ngOnDestroy(){
    this.productsSub.unsubscribe();
  }
}
