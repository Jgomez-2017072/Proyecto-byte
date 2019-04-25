import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

export interface PeriodicElement {
  tipoDescripcion: string;
  tipoProducto: string
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, tipoDescripcion: 'No lo se', tipoProducto: 'Aleacion'},
  {position: 2, tipoDescripcion: 'Archivo tabla', tipoProducto: 'Aleacion'},
  {position: 3, tipoDescripcion: 'Fidora', tipoProducto: 'Aleacion'}, 
  {position: 4, tipoDescripcion: 'Linux', tipoProducto: 'Aleacion'},
  {position: 5, tipoDescripcion: 'Ubuntu', tipoProducto: 'Aleacion'},
  {position: 6, tipoDescripcion: 'Windows', tipoProducto: 'Aleacion'},
  {position: 7, tipoDescripcion: 'Netacad', tipoProducto: 'Aleacion'},
  {position: 8, tipoDescripcion: 'Cisco', tipoProducto: 'Aleacion'},
  {position: 9, tipoDescripcion: 'Fluorine', tipoProducto: 'Aleacion'},
  {position: 10, tipoDescripcion: 'Alcalino', tipoProducto: 'Aleacion'},
];

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = ['position', 'tipoProducto','tipoDescripcion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //Para los modals
constructor(public dialog: MatDialog){}

openDialog1(): void{
    const dialogRef = this.dialog.open(EditarPr)
  }

  @Component({
    selector: 'editar-producto',
    templateUrl: 'editar-producto.html',
    styleUrls: ['./productos.component.scss']
  })
}
