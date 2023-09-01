import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HeroComponent } from './hero/hero.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

const routes: Routes = [
  {path:'main',component:HeroComponent},
  {path:'',redirectTo:'main',pathMatch:"full"},
  {path:'about',component:AboutComponent},
  {path:'work',component:BannerComponent},
  {path:'contact',component:ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
