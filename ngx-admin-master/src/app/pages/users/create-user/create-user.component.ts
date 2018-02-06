import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SmartTableService} from '../../../@core/data/smart-table.service';
import {User} from '../user-list/user.model';
import {UsersRoutingModule} from '../users-routing.module';
import {UserListComponent} from '../user-list/user-list.component';


@Component({
  selector: 'ngx-create-user',
  templateUrl: './create-user.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class CreateUserComponent {

  user: User = new User();

  constructor(private _router: Router, private service: SmartTableService) {

  }

  createUser(): void {
    this.service.createUser(this.user)
      .subscribe(data => {
        alert('Ok')
      });

  };


}


