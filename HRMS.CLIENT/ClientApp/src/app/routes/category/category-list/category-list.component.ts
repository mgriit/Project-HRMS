import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit, OnDestroy {

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('category_list_table.name'),
      field: 'name',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('category_list_table.description'),
      field: 'description',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('category_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '120px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('category_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('category_list_table.delete'),
          tooltip: this.translate.stream('category_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('category_list_table.confirm_delete'),
          popCloseText: this.translate.stream('category_list_table.close'),
          popOkText: this.translate.stream('category_list_table.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];

  private categoriesSub: Subscription;
  isLoading=false;
  mainList = [];
  listData  = [];
  searchKey: string;

  constructor(private categoryService: CategoryService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.categoryService.getCategories();
    this.categoriesSub = this.categoryService
      .getCategoryUpdateListener()
      .subscribe((categoryData: { categorys: Category[]; count: number }) => {
        this.mainList = categoryData.categorys;
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
        return obj.name.toLowerCase().includes(this.searchKey) ||
        obj.description.toLowerCase().includes(this.searchKey)
      }
    )
  }

  edit(value: any) {
    this.router.navigate(['/category/edit', value.id ]);
  }

  delete(value: any) {
    this.isLoading=true;

    this.categoryService.deleteCategory(value.id).subscribe(() => {
      this.categoryService.getCategories();
    }, () => {
      this.isLoading=false;
    });
  }

  ngOnDestroy(){
    this.categoriesSub.unsubscribe();
  }
}
