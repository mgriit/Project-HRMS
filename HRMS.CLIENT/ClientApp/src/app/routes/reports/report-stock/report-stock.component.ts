import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'app/routes/product/product.model';
import { ProductService } from 'app/routes/product/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report-stock',
  templateUrl: './report-stock.component.html',
  styleUrls: ['./report-stock.component.scss']
})
export class ReportStockComponent implements OnInit {
  isLoading=false;
  private productsSub: Subscription;
  dataList:Product[]= [];



  displayedColumns: string[] = ['sl', 'name','categoryName','supplierName','unit','stock'];
  dataSource = new MatTableDataSource(this.dataList);

  constructor(private productService: ProductService,
    private translate: TranslateService) { }

  ngOnInit() {
    this.isLoading=true;
    this.productService.getProducts();
    this.productsSub = this.productService
      .getProductUpdateListener()
      .subscribe((productData: { products: Product[]; count: number }) => {

        this.dataList=productData.products;
        this.dataSource = new MatTableDataSource(this.dataList);

        this.isLoading=false;
    });
  }

  ngOnDestroy(){
    this.productsSub.unsubscribe();
  }
}
