import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

import {SmartTableService} from '../../../@core/data/smart-table.service';
import {User} from './user.model';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class UserListComponent {


  source: User[];
  deleteUser(user: User): void {
    this.service.deleteUser(user)
      .subscribe( data => {
        this.source = this.source.filter(u => u !== user);
      });
  };

  constructor(private service: SmartTableService) {

    this.service.getUsers()
      .subscribe( data => {
        console.info('aaa');
        this.source = data;
      },error2 =>  {
        console.info(error2);
      });
    ;
  }
}
