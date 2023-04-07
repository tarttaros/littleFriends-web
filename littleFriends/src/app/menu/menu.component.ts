import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  static user1: Boolean = true;

  static showDataUser() {
      this.user1 = true;
  }

  static hideDataUser() {
      this.user1 = false;
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
    return MenuComponent.user1;
  }

  get gStaticVet(){
    return MenuComponent.vet;
  }

  get gStaticAdmin(){
    return MenuComponent.admin;
  }

  logout(){
    AuthenticationService.logout();
  }

}
