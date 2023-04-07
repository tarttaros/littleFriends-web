import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
    return VetsComponent.user;
  }

  get gStaticVet(){
    return VetsComponent.vet;
  }

  get gStaticAdmin(){
    return VetsComponent.admin;
  }
}
