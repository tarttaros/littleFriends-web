import { Injectable } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { VetsComponent } from '../vets/vets.component';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor () { }

  static logout() {
    MenuComponent.showDataUser();
    MenuComponent.showDataAdmin();
    MenuComponent.showDataVet();
    VetsComponent.showDataUser();
    VetsComponent.showDataAdmin();
    VetsComponent.showDataVet();
    UserComponent.showDataUser();
    UserComponent.showDataAdmin();
    UserComponent.showDataVet();
    localStorage.removeItem("id_token_user");
    localStorage.removeItem("expires_at_user");
    localStorage.removeItem("id_token_admin");
    localStorage.removeItem("expires_at_admin");
    localStorage.removeItem("id_token_vet");
    localStorage.removeItem("expires_at_vet");
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
