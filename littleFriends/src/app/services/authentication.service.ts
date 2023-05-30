import { Injectable } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor () {
     // This is intentional
  }

  static logout() {
    MenuComponent.admin = false;
    MenuComponent.user = false;
    MenuComponent.vet = false;
    localStorage.removeItem("id_token_user");
    localStorage.removeItem("expires_at_user");
    localStorage.removeItem("id_token_admin");
    localStorage.removeItem("expires_at_admin");
    localStorage.removeItem("id_token_vet");
    localStorage.removeItem("expires_at_vet");
    localStorage.removeItem("persona");
  }

  public isLoggedIn(): boolean {
    return Date.now() < this.getExpiration();
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration(): number {
    const expiration = localStorage.getItem("expires_at") as string;
    const expiresAt = JSON.parse(expiration);
    return expiresAt;
  }

}
