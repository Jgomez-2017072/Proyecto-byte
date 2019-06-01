import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';


export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'}, 
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron'},
  {position: 6, name: 'Carbon'},
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'}
];

export interface PeriodicElement2 {
  name: string;
  position: number;
}


const ELEMENT_DATA2: PeriodicElement2[] = [
  {position: 1, name: 'Hydrogasdfasdfen'},
  {position: 2, name: 'Helasdfium'},
  {position: 3, name: 'Litadsfhium'}, 
  {position: 4, name: 'Berasdfyllium'},
  {position: 1, name: 'Hydrogasdfasdfen'},
  {position: 2, name: 'Helasdfium'},
  {position: 3, name: 'Litadsfhium'}, 
  {position: 4, name: 'Berasdfyllium'},
];

export interface PeriodicElement3 {
  valorMinimo: number;
  valorMaximo: number;
  plazo: string;
  tasa: number;
}


const ELEMENT_DATA3: PeriodicElement3[] = [
  {valorMinimo: 1,valorMaximo: 1, plazo: 'Hydrogen',tasa: 1},
  {valorMinimo: 2,valorMaximo: 1, plazo: 'Helium',tasa: 1},
  {valorMinimo: 3,valorMaximo: 1, plazo: 'Lithium',tasa: 1}, 
  {valorMinimo: 4,valorMaximo: 1, plazo: 'Beryllium',tasa: 1},
  {valorMinimo: 5,valorMaximo: 1, plazo: 'Boron',tasa: 1},
  {valorMinimo: 6,valorMaximo: 1, plazo: 'Carbon',tasa: 1},
  {valorMinimo: 7,valorMaximo: 1, plazo: 'Nitrogen',tasa: 1},
  {valorMinimo: 8,valorMaximo: 1, plazo: 'Oxygen',tasa: 1},
  {valorMinimo: 9,valorMaximo: 1, plazo: 'Fluorine',tasa: 1},
  {valorMinimo: 10,valorMaximo: 1, plazo: 'Neon',tasa: 1},
  {valorMinimo: 7,valorMaximo: 1, plazo: 'Nitrogen',tasa: 1},
];

export interface PeriodicElement4 {
  financiamiento: number;
  tasa: number;
}


const ELEMENT_DATA4: PeriodicElement4[] = [
  {financiamiento: 1,tasa: 1},
  {financiamiento: 2,tasa: 1},
  {financiamiento: 3,tasa: 1}
];

export interface PeriodicElement5 {
  plazoMinimo: number;
  plazoMaximo : number;
  tasa: number;
}


const ELEMENT_DATA5: PeriodicElement5[] = [
  {plazoMinimo: 1,tasa: 1,plazoMaximo:2},
  {plazoMinimo: 2,tasa: 1,plazoMaximo:9},
  {plazoMinimo: 3,tasa: 1,plazoMaximo:4}
];

@Component({
  selector: 'app-parametros-adicionales-producto',
  templateUrl: './parametros-adicionales-producto.component.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class ParametrosAdicionalesProductoComponent implements OnInit {

  public busca1 = '';
  public busca2 = '';
  public busca3 = '';
  public busca4 = '';
  public busca5 = '';


  data = [
    {name: 'Moto'},
    {name: 'Telefono'},
    {name: 'Carro'}, 
    {name: 'Pc'},
    {name: 'Ttt'},
    {name: 'Cdd'}, 
    {name: 'Cpu'},
    {name: 'Telefono'},
    {name: 'Carro'},    
  ]

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('DocumentosAPresentar', {read: MatPaginator}) DocumentosAPresentar: MatPaginator;
  @ViewChild('MontosPorPlazo', {read : MatPaginator}) MontosPorPlazo:MatPaginator;
  @ViewChild('PorcentajeDeFinanciamiento', {read : MatPaginator}) PorcentajeDeFinanciamiento:MatPaginator;
  @ViewChild('RangoDePlazos', {read : MatPaginator}) RangoDePlazos:MatPaginator;

  ngOnInit() {
  }

  paginator1(){
    this.dataSource.paginator = this.paginator;
    console.log('entra al 1')
  }
  paginator2(){
    this.dataSource2.paginator =  this.DocumentosAPresentar;
    console.log('entra al 2')
  }
  paginator3(){
    this.dataSource3.paginator =  this.MontosPorPlazo;
    console.log('entra al 3')
  }
  paginator4(){
    this.dataSource4.paginator =  this.PorcentajeDeFinanciamiento;
    console.log('entra al 4')
  }

  paginator5(){
    this.dataSource5.paginator =  this.RangoDePlazos;
    console.log('entra al 5')
  }

  displayedColumns: string[] = ['position', 'name', 'editar', 'eliminar', 'ver'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['position', 'name', 'editar', 'eliminar', 'ver'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  displayedColumns3: string[] = ['valorMinimo', 'valorMaximo','plazo', 'tasa', 'editar', 'eliminar', 'ver'];
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);

  displayedColumns4: string[] = ['financiamiento','tasa', 'editar', 'eliminar', 'ver'];
  dataSource4 = new MatTableDataSource<PeriodicElement4>(ELEMENT_DATA4);

  displayedColumns5: string[] = ['plazoMinimo','plazoMaximo','tasa', 'editar', 'eliminar', 'ver'];
  dataSource5 = new MatTableDataSource<PeriodicElement5>(ELEMENT_DATA5);
  
  //FILTRO
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  
  applyFilter2(filterValue: string) {
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  } 

  applyFilter3(filterValue: string) {
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  } 
  applyFilter4(filterValue: string) {
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  } 
  applyFilter5(filterValue: string) {
    this.dataSource5.filter = filterValue.trim().toLowerCase();
  } 


  //PARA LOS MODALS
  constructor(public dialog: MatDialog) {}
  panelOpenState = false;


  
  editarEvento(): void {
    const dialogRef = this.dialog.open(EditarEvento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarEvento(): void {
    const dialogRef = this.dialog.open(EliminarEvento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  agregarEvento(): void {
    const dialogRef = this.dialog.open(AgregarEvento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  editarDocumento(): void {
    const dialogRef = this.dialog.open(EditarDocumento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarDocumento(): void {
    const dialogRef = this.dialog.open(EliminarDocumento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  agregarDocumento(): void {
    const dialogRef = this.dialog.open(AgregarDocumento, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  editarMonto(): void {
    const dialogRef = this.dialog.open(EditarMonto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarMonto(): void {
    const dialogRef = this.dialog.open(EliminarMonto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  agregarMonto(): void {
    const dialogRef = this.dialog.open(AgregarMonto, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editarPorcentaje(): void {
    const dialogRef = this.dialog.open(EditarPorcentaje, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarPorcentaje(): void {
    const dialogRef = this.dialog.open(EliminarPorcentaje, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  agregarPorcentaje(): void {
    const dialogRef = this.dialog.open(AgregarPorcentaje, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  editarRango(): void {
    const dialogRef = this.dialog.open(EditarRango, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  eliminarRango(): void {
    const dialogRef = this.dialog.open(EliminarRango, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  agregarRango(): void {
    const dialogRef = this.dialog.open(AgregarRango, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}




@Component({
  selector: 'editar-evento',
  templateUrl: 'editar-evento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EditarEvento {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  constructor(
    public dialogRef: MatDialogRef<EditarEvento>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-evento',
  templateUrl: 'eliminar-evento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EliminarEvento {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarEvento>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-evento',
  templateUrl: 'agregar-evento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class AgregarEvento {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  constructor(
    public dialogRef: MatDialogRef<AgregarEvento>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}




@Component({
  selector: 'editar-documento',
  templateUrl: 'editar-documento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EditarDocumento {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  constructor(
    public dialogRef: MatDialogRef<EditarDocumento>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-documento',
  templateUrl: 'eliminar-documento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EliminarDocumento {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarDocumento>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-documento',
  templateUrl: 'agregar-documento.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class AgregarDocumento {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  constructor(
    public dialogRef: MatDialogRef<AgregarDocumento>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



@Component({
  selector: 'editar-monto',
  templateUrl: 'editar-monto.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EditarMonto{

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  constructor(
    public dialogRef: MatDialogRef<EditarMonto>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-monto',
  templateUrl: 'eliminar-monto.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EliminarMonto {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarMonto>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-monto',
  templateUrl: 'agregar-monto.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class AgregarMonto {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  constructor(
    public dialogRef: MatDialogRef<AgregarMonto>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'editar-porcentaje',
  templateUrl: 'editar-porcentaje.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EditarPorcentaje{

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  constructor(
    public dialogRef: MatDialogRef<EditarPorcentaje>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-porcentaje',
  templateUrl: 'eliminar-porcentaje.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EliminarPorcentaje {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarPorcentaje>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-porcentaje',
  templateUrl: 'agregar-porcentaje.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class AgregarPorcentaje {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  constructor(
    public dialogRef: MatDialogRef<AgregarPorcentaje>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'editar-rango',
  templateUrl: 'editar-rango.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EditarRango{

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];


  constructor(
    public dialogRef: MatDialogRef<EditarRango>, private snackBar: MatSnackBar) {}

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
  selector: 'eliminar-rango',
  templateUrl: 'eliminar-rango.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class EliminarRango {
  
  constructor(
    public dialogRef: MatDialogRef<EliminarRango>, private snackBar: MatSnackBar) {}

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
  selector: 'agregar-rango',
  templateUrl: 'agregar-rango.html',
  styleUrls: ['./parametros-adicionales-producto.component.scss']
})
export class AgregarRango {

  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  
  constructor(
    public dialogRef: MatDialogRef<AgregarRango>, private snackBar: MatSnackBar) {}

    openSnackBar() {
      this.snackBar.open("Registro Guardado!", "", {
        duration: 2100, horizontalPosition : 'end'
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

