import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { DocComponent } from './doc/doc.component';
import { DoclistComponent } from './doclist/doclist.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  { path: "view", component: ViewComponent },
  { path: 'doc', component: DocComponent },
  { path: 'doclist', component: DoclistComponent },
];


@NgModule({
  declarations: [
    DocComponent,
    DoclistComponent,
    ViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),

  ],
  exports: [RouterModule]

})
export class Sample1Module { }
