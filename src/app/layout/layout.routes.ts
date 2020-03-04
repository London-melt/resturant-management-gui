import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // { path: '',  redirectTo: 'order', pathMatch: 'full' },
      // { path: 'order', loadChildren: '../../pages/usecure/order.module#OrderModule' },
    ]
  }
];

export const ROUTES = RouterModule.forChild(routes);