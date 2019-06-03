import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  direccion: String;
  nit: String;
  patenteComercio: String;
  razonSocial: String;
  representanteLegal: String;
  seguroSocial: String;
}

var datosEmpresa: Empresa[];

var codigo = "";
var descripcion = "";
var direccion = "";
var nit = "";
var patenteComercio = "";
var razonSocial = "";
var representanteLegal = "";
var seguroSocial = "";

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresaService]
})
export class EmpresaComponent implements OnInit {

  public dataSource;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getEmpresas();
  }

  displayedColumns: string[] = ['codigo', 'descripcion', 'ver'];

  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _empresaService: EmpresaService) { }

  //Crud -------------- Trae datos -----------------------


  public getEmpresas() {
    this._empresaService.getEmpresas().subscribe(
      response => {
        if (response) {
          datosEmpresa = response;
          console.log(datosEmpresa)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosEmpresa);
          this.dataSource.paginator = this.paginator;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  buscar(id, descripcion2, direccion2, nit2, patenteComercio2, razonSocial2, representanteLegal2, seguroSocial2) {
    //codigo = id;
    codigo = id;
    descripcion = descripcion2;
    direccion = direccion2;
    nit = nit2;
    patenteComercio = patenteComercio2;
    razonSocial = razonSocial2;
    representanteLegal = representanteLegal2;
    seguroSocial = seguroSocial2;
    console.log(codigo + " - " + descripcion + " - " + direccion + " - " + nit + " - " + patenteComercio + " - " + razonSocial + " - " + representanteLegal + " - " + seguroSocial)
  }
  //----------------------------------------------------------

  openDialog1(): void {
    const dialogRef = this.dialog.open(VerEmpresa, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      setTimeout(() => {
        this.getEmpresas();
      }, 800);
    });
  }
}

@Component({
  selector: 'ver-empresa',
  templateUrl: 'ver-empresa.html',
  styleUrls: ['./empresa.component.scss'],
  providers: [EmpresaService]
})

export class VerEmpresa implements OnInit {

  ngOnInit() {
    this.empresa.codigo = codigo;
    this.empresa.descripcion = descripcion;
    this.empresa.direccion = direccion;
    this.empresa.nit = nit;
    this.empresa.patenteComercio = patenteComercio;
    this.empresa.razonSocial = razonSocial;
    this.empresa.representanteLegal = representanteLegal;
    this.empresa.seguroSocial = seguroSocial;
  }

  public empresa: Empresa;
  public status;

  constructor(
    public dialogRef: MatDialogRef<VerEmpresa>, private snackBar: MatSnackBar, private _empresaService: EmpresaService) {
    this.empresa = new Empresa("", "", "", "", "", "", "", "");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
