import { Component, OnInit } from '@angular/core';
import { User } from '../class/user';
import { UserService } from '../services/user.service';

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
      this.userService.showUsers();
      this.users = UserService.users;
      UserService.users = [];
  }
  static user: Boolean = true;

  static showDataUser() {
      this.user = true;
  }

  static hideDataUser() {
      this.user = false;
  }

  static vet: Boolean = true;

  static showDataVet() {
      this.vet = true;
  }

  static hideDataVet() {
      this.vet = false;
  }

  static admin: Boolean = true;

  static showDataAdmin() {
      this.admin = true;
  }

  static hideDataAdmin() {
      this.admin = false;
  }

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
