import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: "sample-1", pathMatch: "full" },
  {
    path: "sample-1",
    loadChildren: () => import('./pages/sample-1/sample-1.module').then(m => m.Sample1Module)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
