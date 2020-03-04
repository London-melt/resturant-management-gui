import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [LayoutComponent,SidebarComponent],
  imports: [
    CommonModule,
    ROUTES,
    SidebarModule,
    ButtonModule
  ]
})
export class LayoutModule { }
