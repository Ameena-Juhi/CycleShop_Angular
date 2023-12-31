import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionpageComponent } from './sectionpage/sectionpage.component';

const routes: Routes = [
  // {path:'cart',component:CartComponent}
  { path: 'home', component: HomeComponent },

  { path: 'sectionpage/:productId', component: SectionpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
