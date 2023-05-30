import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  constructor() {
     // This is intentional
   }

  ngOnInit(): void {
    if(localStorage.getItem("persona") == "admin"){
      VetsComponent.admin = true;
    }
    else if(localStorage.getItem("persona") == "vet"){
      VetsComponent.vet = true;
    }
    else if(localStorage.getItem("persona") == "user"){
      VetsComponent.user = true;
    }
    else{
      VetsComponent.user = false;
      VetsComponent.vet = false;
      VetsComponent.admin = false;
    }
  }

  static user: boolean;

  static vet: boolean;

  static admin: boolean;

  get gStaticUser(){
    return VetsComponent.user;
  }

  get gStaticVet(){
    return VetsComponent.vet;
  }

  get gStaticAdmin(){
    return VetsComponent.admin;
  }
}
