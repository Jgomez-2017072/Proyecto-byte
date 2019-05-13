import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatCardModule, MatRadioModule} from '@angular/material';
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
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatTreeModule} from '@angular/material/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatMenuModule,MatSidenavModule,MatListModule,MatTableModule,MatFormFieldModule,
    MatDialogModule,MatInputModule,MatSnackBarModule, MatDatepickerModule, MatNativeDateModule, 
    MatPaginatorModule, MatSelectModule, MatTabsModule,MatRadioModule,MatStepperModule,MatDividerModule,
    MatTreeModule,MatAutocompleteModule,ReactiveFormsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatMenuModule,MatSidenavModule,MatListModule,MatTableModule,MatFormFieldModule,
    MatDialogModule,MatInputModule,MatSnackBarModule, MatDatepickerModule, MatNativeDateModule
    ,MatSelectModule, MatTabsModule,MatRadioModule,MatStepperModule
    , MatPaginatorModule, MatDividerModule,MatTreeModule,MatAutocompleteModule,ReactiveFormsModule]
  
})
export class MaterialModule { }