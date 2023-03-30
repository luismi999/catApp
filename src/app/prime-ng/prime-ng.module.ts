import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    SidebarModule,
    InputTextModule,
    DividerModule,
    ToastModule,
    TableModule,
    DropdownModule
  ],
  exports: [
    ButtonModule,
    SidebarModule,
    DialogModule,
    InputTextModule,
    DividerModule,
    ToastModule,
    TableModule,
    DropdownModule
  ]
})
export class PrimeNgModule { }
