import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { MatButtonModule } from '@angular/material/button';
import { PolicyComponent } from './policy/policy.component';
import { TableModule } from 'src/app/components/table/table.module';


@NgModule({
  declarations: [
    AboutComponent,
    PolicyComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
    TableModule
  ]
})
export class AboutModule { }
