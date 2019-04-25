import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialogRef, MatSnackBar, MatDialog, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  code: number;
  position: number;
  description:string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, code: 1,description:'No lo se rick'},
  {position: 2, code: 2, description: 'No lo se rick'},
  {position: 3, code: 3, description: 'No lo se rick' }, 
  {position: 4, code: 4, description: 'No lo se rick'},
  {position: 5, code: 5, description: 'No lo se rick'},
  {position: 6, code: 8, description: 'No lo se rick'},
  {position: 7, code: 9, description: 'No lo se rick'},
  {position: 8, code: 5, description: 'No lo se rick'},
  {position: 9, code: 4, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
 
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},


  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'},
  {position: 10, code: 9, description: 'No lo se rick'}

];



@Component({
  selector: 'app-acercamiento',
  templateUrl: './acercamiento.component.html',
  styleUrls: ['./acercamiento.component.scss']
})
export class AcercamientoComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['code', 'position', 'description', 'edit', 'delete', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Whether the number of selected elements matches the total number of rows. 
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Selects all rows if they are not all selected; otherwise clear selection. 
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // The label for the checkbox on the passed row 
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarAcercamiento, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarAcercamiento, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarAcercamiento, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'Editar-acercamiento',
  templateUrl: 'Editar-acercamiento.html',
  styleUrls: ['./acercamiento.component.scss']
})
export class EditarAcercamiento {
  constructor(
    public dialogRef: MatDialogRef<EditarAcercamiento>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Actualizado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'eliminar-acercamiento',
  templateUrl: 'eliminar-acercamiento.html',
  styleUrls: ['./acercamiento.component.scss']
})
export class EliminarAcercamiento {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarAcercamiento>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Eliminado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'agregar-acercamiento',
  templateUrl: 'agregar-acercamiento.html',
  styleUrls: ['./acercamiento.component.scss']
})
export class AgregarAcercamiento{
  
  constructor(
    public dialogRef: MatDialogRef<AgregarAcercamiento>,private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


