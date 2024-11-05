import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'layout', component: HomelayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
