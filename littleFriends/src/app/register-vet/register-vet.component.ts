import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/register.service";
import { Veterinary } from '../class/veterinary';

@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.component.html',
  styleUrls: ['./register-vet.component.css']
})
export class RegisterVetComponent implements OnInit {

  vet : Veterinary = new Veterinary();
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  vetRegister()
  {
    this.registerService.registerVet(this.vet).subscribe(data=>{alert("Veterinario registrado con exito")},error=>alert("El veterinario no se ha podido registrar"))
  }
}
