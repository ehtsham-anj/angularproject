import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { InstantFoodComponent } from './components/instant-food/instant-food.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';

import { ReserveComponent } from './components/reserve/reserve.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  
  {
    path:"login", 
    component: LoginComponent},
    {
      path:"reserve", 
      component: ReserveComponent, 
      pathMatch: 'full'
  },
      
     
     { path:"home", 
      component:BannerComponent,
      pathMatch:"full"}, 

      { path:"menu", 
      component:MenuComponent,
      pathMatch:"full"},

      { path:"home/menu", 
      component:MenuComponent,
      pathMatch:"full"}, 

      { path:"instant", 
      component:InstantFoodComponent,
      pathMatch:"full"}, 

      { path:"login/register", 
      component:RegisterComponent,
      pathMatch:"full"}, 
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
