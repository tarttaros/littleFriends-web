import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'little-friends';
  constructor(private http: HttpClient) { }

  ngOnInit()
  {
    /*
    this.http.get("",{responseType: 'text'}).subscribe((resp:any) =>
    {
      this.title = resp;
    }),
    (error:any) => //se crea el metodo para capturar el error
    {
      console.log(error); //se imprime el tipo de error
    }
    */
  }
}
