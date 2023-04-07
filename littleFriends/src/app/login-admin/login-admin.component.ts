import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { TokenRequest } from '../class/token-request';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  tokenRequest : TokenRequest = new TokenRequest();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this.loginService.loginAdmin(this.tokenRequest.email,this.tokenRequest.password).subscribe(data=>{""},error=>alert("Error al iniciar sesion"))
  }
}
