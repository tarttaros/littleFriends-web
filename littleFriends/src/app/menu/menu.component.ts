import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  static admin: boolean;
  static user: boolean;
  static vet: boolean;

  constructor() {
     // This is intentional
  }

  ngOnInit(): void {
    if(localStorage.getItem("persona") == "admin"){
      MenuComponent.admin = true;
    }
    else if(localStorage.getItem("persona") == "vet"){
      MenuComponent.vet = true;
    }
    else if(localStorage.getItem("persona") == "user"){
      MenuComponent.user = true;
    }
    else{
      MenuComponent.user = false;
      MenuComponent.vet = false;
      MenuComponent.admin = false;
    }

  }

  get gStaticUser(){
    return MenuComponent.user;
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
