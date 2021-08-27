import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DropdownItem } from '@shared/models/dropdown-item';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CategoryService } from '../../category/category.service';

import { SupplierService } from '../../supplier/supplier.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit,AfterViewInit, OnDestroy {

  isLoading=false;

  product: Product;
  productForm: FormGroup;
  private mode = "create";
  private id: any;

  public categories : DropdownItem[];
  public suppliers : DropdownItem[];



  constructor(private productService: ProductService, private categoryService: CategoryService,
    private supplierservice: SupplierService, public route: ActivatedRoute) { }

  ngOnInit() {

    this.createForm();
    this.isLoading=true;
    this.supplierservice.getSuppliersShort().subscribe(data => {
      this.isLoading=false;
      this.suppliers = data;
    });

    this.isLoading=true;
    this.categoryService.getCategoriesShort().subscribe(data => {
      this.isLoading=false;
      this.categories=data;
    });


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.isLoading=true;
        this.productService.getProduct(this.id).subscribe(data => {
          this.isLoading=false;
          this.product = {
            id: data.id,
            name: data.name,
            categoryId: data.categoryId,
            categoryName: data.categoryName,
            unit: data.unit,
            bprice: data.bprice,
            price: data.price,
            description: data.description,
            supplierId : data.supplierId,
            supplierName: data.supplierName
          };

          this.productForm.setValue({
            name: this.product.name,
            category: this.product.categoryId,
            description: this.product.description,
            supplier:this.product.supplierId,
            unit :  this.product.unit,
            price : this.product.price,
            bprice : this.product.bprice
          });
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });

  }

  private createForm() {
    this.productForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        category: new FormControl(null,Validators.required),
        supplier: new FormControl(null,Validators.required),
        unit: new FormControl(null,Validators.required),
        bprice : new FormControl(null,Validators.required),
        price : new FormControl(null,Validators.required),
        description: new FormControl(null)
      }
    );
  }

  onSavePost() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    this.isLoading=true;
    if (this.mode === "create") {
      this.productService.addProduct(this.userData());
    }
    else {
      this.productService.updateProduct(this.userData());
    }
  }


  userData(): Product {
    return (this.product = {
      id: this.mode=='create'?null:this.id,
      name: this.productForm.get('name').value,
      description: this.productForm.get('description').value,
      bprice: this.productForm.get('bprice').value,
      price: this.productForm.get('price').value,
      unit: this.productForm.get('unit').value,
      categoryId: this.productForm.get('category').value,
      supplierId: this.productForm.get('supplier').value,
    });
  }

  onReset() {
    this.productForm.reset();
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }
}
