import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES } from './layout.routes';
import { LayoutComponent } from './layout.component';
import { AppSidebarModule } from './sidebar/app-sidebar.module';

@NgModule({
  // entryComponents:[LayoutComponent],
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ROUTES,
    AppSidebarModule,
  ]
})
export class LayoutModule { }
