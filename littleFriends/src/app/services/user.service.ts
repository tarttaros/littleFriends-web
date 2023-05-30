import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static users : User[] = [];
  constructor(private http: HttpClient) { }
/*
  showUsers(){
    this.http.get('http://Proyecto-env.eba-apnhh2qc.us-east-2.elasticbeanstalk.com:9090/user').subscribe((res: any) => {
      res.forEach((element: User)  => {
        console.log(element);
        UserService.users.push(element);
      });
    })}

    showUsers(){
      this.http.get('http://localhost:9090/user').subscribe((res: any) => {
        res.forEach((element: User)  => {
          console.log(element);
          UserService.users.push(element);
        });
      })}

*/
    showUsers(){
      return this.http.get<User[]>('http://Proyecto-env.eba-apnhh2qc.us-east-2.elasticbeanstalk.com:9090/user')
    }
}
