import { Component,OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { User } from "../class/user";

@Component
({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit
{
  user : User = new User();
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void{}

  userRegister()
  {
    this.registerService.registerUser(this.user).subscribe(data=>{alert("Usuario registrado con exito")},error=>alert("El usuario no se ha podido registrar"))
  }
}
