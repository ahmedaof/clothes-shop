import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DetailsComponent } from './clothes/details/details.component';
import { EditComponent } from './clothes/edit/edit.component';

const routes: Routes = [
  {  path:'',redirectTo:'/clothes',pathMatch:'full'},
  {  path:'clothes',component: ClothesComponent,children:[
   { path:'new',component: EditComponent,canActivate:[AuthGuard]},
    {  path:':id',component: DetailsComponent,canActivate:[AuthGuard]},
    {  path:':id/Edit',component: EditComponent,canActivate:[AuthGuard]}
    
  ]},
  {  path:'signup',component: SignupComponent,canActivate:[AuthGuard]},
  {  path:'signin',component: SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
