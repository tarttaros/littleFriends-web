import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenRequest } from '../class/token-request';
import { TokenResponse } from '../class/token-response';
import { tap, shareReplay } from 'rxjs/operators';
import { DateService } from './date.service';
import { MenuComponent } from '../menu/menu.component';
import { VetsComponent } from '../vets/vets.component';
import { ProductComponent } from '../product/product.component';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor (private http: HttpClient, private dateService: DateService) { }

  login (email: string, password: string): Observable<TokenResponse> {
    let tokenRequest: TokenRequest = { email: email, password: password };
    return this.http.post<TokenResponse>('http://localhost:9090/login',tokenRequest).pipe(
            tap((resp: TokenResponse) => this.setSession1(resp)),shareReplay());
  }

  loginAdmin (email: string, password: string): Observable<TokenResponse> {
    let tokenRequest: TokenRequest = { email: email, password: password };
    return this.http.post<TokenResponse>('http://localhost:9090/login-admin',tokenRequest).pipe(
            tap((resp: TokenResponse) => this.setSession2(resp)),shareReplay());
  }

  loginVet (email: string, password: string): Observable<TokenResponse> {
    let tokenRequest: TokenRequest = { email: email, password: password };
    return this.http.post<TokenResponse>('http://localhost:9090/login-vet',tokenRequest).pipe(
            tap((resp: TokenResponse) => this.setSession3(resp)),shareReplay());
  }

  private setSession1 (authResult1: TokenResponse) {
    const expiresAt = authResult1.expirationDate;
    MenuComponent.hideDataUser();
    VetsComponent.hideDataUser();
    UserComponent.hideDataUser();
    ProductComponent.hideDataUser();
    localStorage.setItem('id_token_user', authResult1.token);
    localStorage.setItem("expires_at_user", JSON.stringify(expiresAt.valueOf()));
    /*
    console.log("Token expires at " + expiresAt);
    console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));
    */
  }
  private setSession2 (authResult2: TokenResponse) {
    const expiresAt = authResult2.expirationDate;
    MenuComponent.hideDataAdmin();
    VetsComponent.hideDataAdmin();
    ProductComponent.hideDataAdmin();
    UserComponent.hideDataAdmin();
    localStorage.setItem('id_token_admin', authResult2.token);
    localStorage.setItem("expires_at_admin", JSON.stringify(expiresAt.valueOf()));
    /*
    console.log("Token expires at " + expiresAt);
    console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));
    */
  }
  private setSession3 (authResult3: TokenResponse) {
    const expiresAt = authResult3.expirationDate;
    MenuComponent.hideDataVet();
    VetsComponent.hideDataVet();
    UserComponent.hideDataVet();
    ProductComponent.hideDataVet();
    localStorage.setItem('id_token_vet', authResult3.token);
    localStorage.setItem("expires_at_vet", JSON.stringify(expiresAt.valueOf()));
    /*
    console.log("Token expires at " + expiresAt);
    console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));
    */
  }
}
