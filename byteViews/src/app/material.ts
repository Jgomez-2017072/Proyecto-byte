import {MatButtonModule, MatCheckboxModule, MatPaginatorModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatMenuModule,MatSidenavModule,MatListModule,MatTableModule,MatFormFieldModule,
    MatDialogModule,MatInputModule,MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatMenuModule,MatSidenavModule,MatListModule,MatTableModule,MatFormFieldModule,
    MatDialogModule,MatInputModule,MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, MatPaginatorModule],
})
export class MaterialModule { }