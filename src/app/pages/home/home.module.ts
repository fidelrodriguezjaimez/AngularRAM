import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatButtonModule } from '@angular/material/button';
import { HomelayoutComponent } from './homelayout/homelayout.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomelayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
  ],
  exports:[]
})
export class HomeModule { }
