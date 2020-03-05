import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { AppSidebarComponent } from './app-sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppSidebarComponent],
  imports: [
    CommonModule,
    PanelMenuModule,
    MenuModule,
    SidebarModule,
    ButtonModule

  ],
  exports: [AppSidebarComponent]
})
export class AppSidebarModule { }
