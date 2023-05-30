import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../services/user.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users !: User[];
  user : User = new User();
  displayedColumns: string[] = ['Nombre', 'Telefono', 'Id', 'Email'];
  constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.userService.showUsers().subscribe(data=>
        {this.users=data;
        })

      if(localStorage.getItem("persona") == "admin"){
        UserComponent.admin = true;
      }
      else if(localStorage.getItem("persona") == "vet"){
        UserComponent.vet = true;
      }
      else if(localStorage.getItem("persona") == "user"){
        UserComponent.user = true;
      }
      else{
        UserComponent.user = false;
        UserComponent.vet = false;
        UserComponent.admin = false;
      }
  }
  static user: boolean;

  static vet: boolean;

  static admin: boolean;

  get gStaticUser(){
    return UserComponent.user;
  }

  get gStaticVet(){
    return UserComponent.vet;
  }

  get gStaticAdmin(){
    return UserComponent.admin;
  }
}
