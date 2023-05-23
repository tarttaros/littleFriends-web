import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static users : User[] = [];
  constructor(private http: HttpClient) { }

  showUsers(){
    this.http.get('http://Backend-sftw3-env.eba-qmi3ideu.us-east-2.elasticbeanstalk.com:9090/user').subscribe((res: any) => {
      res.forEach((element: User)  => {
        console.log(element);
        UserService.users.push(element);
      });
    })}
}
