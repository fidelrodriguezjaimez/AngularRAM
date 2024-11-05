import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptpracticeComponent } from './typescriptpractice.component';

const routes: Routes = [
  { path: '', component: TypescriptpracticeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TypescriptpracticeRoutingModule { }
