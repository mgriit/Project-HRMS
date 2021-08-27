import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  isLoading = false;
  category: Category;
  categoryForm: FormGroup;
  private mode = "create";
  private id: any;

  constructor(public categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.mode = "edit";
        this.id = paramMap.get("id");

        this.categoryService.getCategory(this.id).subscribe(data => {
          this.category = {
            id: data.id,
            name: data.name,
            description: data.description
          };

          this.categoryForm.setValue({
            name: this.category.name,
            description: this.category.description
          });
        });
      } else {
        this.mode = "create";
        this.id = null;
      }
    });
  }

  private createForm() {
    this.categoryForm = new FormGroup(
      {
        name: new FormControl(null, Validators.required),
        description: new FormControl(null)
      }
    );
  }

  onSavePost() {
    if (this.categoryForm.invalid) {
      return;
    }

    if (this.mode === "create") {
      this.isLoading = true;
      this.categoryService.addCategory(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Category has been added");
        this.router.navigate(['/category/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
    else {
      this.categoryService.updateCategory(this.userData())
      .subscribe((responseData) => {
        this.isLoading = false;
        this.toastr.success("Category has been updated");
        this.router.navigate(['/category/list']);
      },(err)=>{
        this.isLoading = false;
      });
    }
  }


  userData(): Category {
    return (this.category = {
      id: this.mode=='create'?null:this.id,
      name: this.categoryForm.get('name').value,
      description: this.categoryForm.get('description').value,
    });
  }

  onReset() {
    this.categoryForm.reset();
  }
}
