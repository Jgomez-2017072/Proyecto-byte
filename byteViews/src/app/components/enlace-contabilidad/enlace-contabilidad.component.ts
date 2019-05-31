import { Component, OnInit, Inject, ViewEncapsulation, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import {MatGridListModule} from '@angular/material/grid-list';
export interface PeriodicElement {
  agencia: number;
  descripcion: string;
  pais: string;
  empresa: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {agencia: 1, descripcion: 'Hydrogen', pais: 'Guatemala', empresa: 'byte.SA'  },
  {agencia: 2, descripcion: 'Helium', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 3, descripcion: 'Lithium', pais: 'Guatemala', empresa: 'byte.SA'}, 
  {agencia: 4, descripcion: 'Beryllium', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 5, descripcion: 'Boron', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 6, descripcion: 'Carbon', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 7, descripcion: 'Nitrogen', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 8, descripcion: 'Oxygen', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 9, descripcion: 'Fluorine', pais: 'Guatemala', empresa: 'byte.SA'},
  {agencia: 10, descripcion: 'Neon', pais: 'Guatemala', empresa: 'byte.SA'},
];

@Component({
  selector: 'app-enlace-contabilidad',
  templateUrl: './enlace-contabilidad.component.html',
  styleUrls: ['./enlace-contabilidad.component.scss']
})
export class EnlaceContabilidadComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['agencia', 'descripcion', 'pais', 'empresa', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  //FILTRO
 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarEnlaceContabilidad, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarEnlaceContabilidad, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarEnlaceContabilidad, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'editar-enlace-contabilidad',
  templateUrl: 'editar-enlace-contabilidad.html',
  styleUrls: ['./enlace-contabilidad.component.scss']
})
export class EditarEnlaceContabilidad {
  constructor(
    public dialogRef: MatDialogRef<EditarEnlaceContabilidad>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-enlace-contabilidad}',
  templateUrl: 'eliminar-enlace-contabilidad.html',
  styleUrls: ['./enlace-contabilidad.component.scss']
})
export class EliminarEnlaceContabilidad {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarEnlaceContabilidad>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-enlace-contabilidad',
  templateUrl: 'agregar-enlace-contabilidad.html',
  styleUrls: ['./enlace-contabilidad.component.scss']
})
export class AgregarEnlaceContabilidad {
  states: string[] = [
'Afganistán',
'Albania',
'Alemania',
'Andorra',
'Angola',
'Antigua y Barbuda',
'Arabia Saudita',
'Argelia',
'Argentina',
'Armenia',
'Australia',
'Austria',
'Azerbaiyán',
'Bahamas',
'Bangladés',
'Barbados',
'Baréin',
'Bélgica',
'Belice',
'Benín',
'Bielorrusia',
'Birmania',
'Bolivia',
'Bosnia y Herzegovina',
'Botsuana',
'Brasil',
'Brunéi',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Bután',
'Cabo Verde',
'Camboya',
'Camerún',
'Canadá',
'Catar',
'Chad',
'Chile',
'China',
'Chipre',
'Ciudad del Vaticano',
'Colombia',
'Comoras',
'Corea del Norte',
'Corea del Sur',
'Costa de Marfil',
'Costa Rica',
'Croacia',
'Cuba',
'Dinamarca',
'Dominica',
'Ecuador',
'Egipto',
'El Salvador',
'Emiratos Árabes Unidos',
'Eritrea',
'Eslovaquia',
'Eslovenia',
'España',
'Estados Unidos',
'Estonia',
'Etiopía',
'Filipinas',
'Finlandia',
'Fiyi',
'Francia',
'Gabón',
'Gambia',
'Georgia',
'Ghana',
'Granada',
'Grecia',
'Guatemala',
'Guyana',
'Guinea',
'Guinea ecuatorial',
'Guinea-Bisáu',
'Haití',
'Honduras',
'Hungría',
'India',
'Indonesia',
'Irak',
'Irán',
'Irlanda',
'Islandia',
'Islas Marshall',
'Islas Salomón',
'Israel',
'Italia',
'Jamaica',
'Japón',
'Jordania',
'Kazajistán',
'Kenia',
'Kirguistán',
'Kiribati',
'Kuwait',
'Laos',
'Lesoto',
'Letonia',
'Líbano',
'Liberia',
'Libia',
'Liechtenstein',
'Lituania',
'Luxemburgo',
'Madagascar',
'Malasia',
'Malaui',
'Maldivas',
'Malí',
'Malta',
'Marruecos',
'Mauricio',
'Mauritania',
'México',
'Micronesia',
'Moldavia',
'Mónaco',
'Mongolia',
'Montenegro',
'Mozambique',
'Namibia',
'Nauru',
'Nepal',
'Nicaragua',
'Níger',
'Nigeria',
'Noruega',
'Nueva Zelanda',
'Omán',
'Países Bajos',
'Pakistán',
'Palaos',
'Panamá',
'Papúa Nueva Guinea',
'Paraguay',
'Perú',
'Polonia',
'Portugal',
'Reino Unido',
'República Centroafricana',
'República Checa',
'República de Macedonia',
'República del Congo',
'República Democrática del Congo',
'República Dominicana',
'República Sudafricana',
'Ruanda',
'Rumanía',
'Rusia',
'Samoa',
'San Cristóbal y Nieves',
'San Marino',
'San Vicente y las Granadinas',
'Santa Lucía',
'Santo Tomé y Príncipe',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leona',
'Singapur',
'Siria',
'Somalia',
'Sri Lanka',
'Suazilandia',
'Sudán',
'Sudán del Sur',
'Suecia',
'Suiza',
'Surinam',
'Tailandia',
'Tanzania',
'Tayikistán',
'Timor Oriental',
'Togo',
'Tonga',
'Trinidad y Tobago',
'Túnez',
'Turkmenistán',
'Turquía',
'Tuvalu',
'Ucrania',
'Uganda',
'Uruguay',
'Uzbekistán',
'Vanuatu',
'Venezuela',
'Vietnam',
'Yemen',
'Yibuti',
'Zambia',
'Zimbabue',
  ];


  constructor(
    public dialogRef: MatDialogRef<AgregarEnlaceContabilidad>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
