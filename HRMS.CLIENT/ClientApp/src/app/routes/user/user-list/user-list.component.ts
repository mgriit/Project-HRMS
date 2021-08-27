import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MtxDialog, MtxGridColumn } from '@ng-matero/extensions';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  columns: MtxGridColumn[] = [
    {
      header: this.translate.stream('user_list_table.name'),
      field: 'name',
      sortable: true,
      disabled: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('user_list_table.username'),
      field: 'username',
      sortable: true,
      disabled: false,
      minWidth: 100,
    },
    {
      header: this.translate.stream('user_list_table.designation'),
      field: 'designation',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('user_list_table.role'),
      field: 'roleName',
      sortable: true,
      minWidth: 100,
    },
    {
      header: this.translate.stream('user_list_table.operation'),
      field: 'operation',
      minWidth: 120,
      width: '120px',
      pinned: 'right',
      type: 'button',
      buttons: [
        {
          type: 'icon',
          icon: 'edit',
          tooltip: this.translate.stream('user_list_table.edit'),
          click: record => this.edit(record),
        },
        {
          color: 'warn',
          icon: 'delete',
          text: this.translate.stream('user_list_table.delete'),
          tooltip: this.translate.stream('user_list_table.delete'),
          pop: true,
          popTitle: this.translate.stream('user_list_table.confirm_delete'),
          popCloseText: this.translate.stream('user_list_table.close'),
          popOkText: this.translate.stream('user_list_table.ok'),
          click: record => this.delete(record),
        },
      ],
    },
  ];
  private usersSub: Subscription;
  private spinnerSub: Subscription;

  isLoading=false;
  listData= [];
  mainList=[];
  searchKey: string;

  constructor(private userService: UserService,
    private translate: TranslateService,
    public dialog: MtxDialog,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.isLoading=true;
    this.userService.getUsers();
    this.usersSub = this.userService
      .getUserUpdateListener()
      .subscribe((userData: { users: User[]; count: number }) => {
        this.isLoading=false;
        this.mainList = userData.users;
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
        obj.username.toLowerCase().includes(this.searchKey) ||
        obj.designation.toLowerCase().includes(this.searchKey)
      }
    )
  }

  edit(value: any) {
    this.router.navigate(['/user/edit', value.id ]);
  }

  delete(value: any) {
    this.isLoading=true;

    this.userService.deleteUser(value.id).subscribe(() => {
      this.userService.getUsers();
    }, () => {
      this.isLoading=false;
    });
  }
  ngOnDestroy(){
    this.usersSub.unsubscribe();
  }
}
