import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../pages/users/user-list/user.model';

@Injectable()
export class SmartTableService {

  constructor(private http: HttpClient) {
  }

  private userUrl = 'http://localhost:9090/user-portal/api';

  // private userUrl = '/user-portal/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }


}
