import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { TokenRequest } from '../class/token-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenRequest : TokenRequest = new TokenRequest();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userLogin(){
    this.loginService.login(this.tokenRequest.email,this.tokenRequest.password).subscribe(data=>{""},error=>alert("Error al iniciar sesion"))
  }

}
