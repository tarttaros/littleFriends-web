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
     // This is intentional
  }

  static user: boolean = true;

  static showDataUser() {
      this.user = true;
  }

  static hideDataUser() {
      this.user = false;
  }

  static vet: boolean = true;

  static showDataVet() {
      this.vet = true;
  }

  static hideDataVet() {
      this.vet = false;
  }

  static admin: boolean = true;

  static showDataAdmin() {
      this.admin = true;
  }

  static hideDataAdmin() {
      this.admin = false;
  }

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
