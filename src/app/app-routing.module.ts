import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [{
  path: '', redirectTo: 'app', pathMatch: 'full'
},
{
  path: 'app', loadChildren: './layout/layout.module#LayoutModule'
}
]


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
