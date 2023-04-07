import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginVetComponent } from './login-vet/login-vet.component';
import { RegisterVetComponent } from './register-vet/register-vet.component';
import { VetsComponent } from './vets/vets.component';
import { UserComponent } from './user/user.component';
import { RegisterProductComponent } from './register-product/register-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'login-vet', component: LoginVetComponent},
  { path: 'login-admin', component: LoginAdminComponent},
  { path: 'product', component: ProductComponent},
  { path: 'vets', component: VetsComponent},
  { path: 'user', component: UserComponent},
  { path: 'register-user', component: RegisterUserComponent},
  { path: 'register-vet', component: RegisterVetComponent},
  { path: 'register-product', component: RegisterProductComponent},
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
