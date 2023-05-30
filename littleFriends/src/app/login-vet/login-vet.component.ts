import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { TokenRequest } from '../class/token-request';

@Component({
  selector: 'app-login-vet',
  templateUrl: './login-vet.component.html',
  styleUrls: ['./login-vet.component.css']
})
export class LoginVetComponent implements OnInit {

  tokenRequest : TokenRequest = new TokenRequest();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
     // This is intentional
  }

  vetLogin(){
    this.loginService.loginVet(this.tokenRequest.email,this.tokenRequest.password).subscribe(data=>{alert("Bienvenido veterinario")},error=>alert("Error al iniciar sesion"))
  }
}

