import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import { MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';

export interface PeriodicElement {
  codigo: String;
  descripcion: String;
  empresa: String;
}

var datosCategoria: Categoria[];


var codigo = '';
var descripcion = '';
var empresa = '';

@Component({
  selector: 'app-categorias-sib',
  templateUrl: './categorias-sib.component.html',
  styleUrls: ['./categorias-sib.component.scss'],
  providers:[CategoriaService]
})
export class CategoriasSibComponent implements OnInit {

  public dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.getCategoria()
  }


  displayedColumns: string[] = [ 'codigo', 'descripcion', 'editar', 'eliminar','ver'];
  
  //FILTRO

 applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //PARA LOS MODALS
  constructor(public dialog: MatDialog, private _categoriaService : CategoriaService) {}


  //CRUD --------------------- TRAER DATOS --------------------------
  



  public getCategoria(){
    this._categoriaService.getCategorias().subscribe(
      response => {
        if(response){
          datosCategoria = response;
          console.log(datosCategoria)
          this.dataSource = new MatTableDataSource<PeriodicElement>(datosCategoria);
          this.dataSource.paginator = this.paginator;

        } 
      },
      error=>{
        console.log(<any>error);
      }

    )
  }

  buscar(id, descripcion2, empresa2){
    codigo = id;
    descripcion = descripcion2;
    empresa = empresa2;
    console.log(codigo + " - " + descripcion + " - " + empresa)
  }

  

  openDialog1(): void {
    const dialogRef = this.dialog.open(EditarCategoriasSib, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getCategoria();
     
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog.open(EliminarCategoriasSib, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getCategoria();
      
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(AgregarCategoriasSib, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      
        this.getCategoria();
      
    });
  }

  openDialog4(): void {
    const dialogRef = this.dialog.open(VerCategoria, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


@Component({
  selector: 'editar-categorias-sib',
  templateUrl: 'editar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class EditarCategoriasSib {

  ngOnInit() {
    //this.buscarAseguradora();
    this.categoria.codigo = codigo;
    this.categoria.descripcion = descripcion;
    this.categoria.empresa = empresa;
  }

  public categoria : Categoria;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EditarCategoriasSib>, private snackBar: MatSnackBar, private _categoriaService : CategoriaService) {
      this.categoria = new Categoria("","","");
    }

    


  onNoClick(): void {
    this.dialogRef.close();
  }

  editarCategoria(){
    console.log(this.categoria)
    this._categoriaService.editarCategoria(this.categoria).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          if(response.description === 'Editado Correctamente'){
              this.dialogRef.close();
              this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
                duration: 2100, horizontalPosition: 'end'
              });
           
          }else{
              this.snackBar.open(response.description, "", {panelClass: ['colorError'],
                duration: 3100, horizontalPosition: 'end'
              });
          }
        }
      },
      error => {
        if(error){
          console.log(<any>error);
          this.status = 'error';
        }
        this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
        duration: 3100, horizontalPosition: 'end'
        });
      }
    )
  }

}

@Component({
  selector: 'eliminar-categorias-sib',
  templateUrl: 'eliminar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss']
})
export class EliminarCategoriasSib {
  
  ngOnInit() {
    //this.buscarAseguradora();
    this.categoria.codigo = codigo;
    this.categoria.descripcion = descripcion;
    this.categoria.empresa = empresa;
  }
  
  public categoria : Categoria;
  public status;

  constructor(
    public dialogRef: MatDialogRef<EliminarCategoriasSib>, private snackBar: MatSnackBar, private _categoriaService: CategoriaService) {
      this.categoria = new Categoria("","","");

    }

   


  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminarCategoria(){    
    this._categoriaService.eliminarCategoria(this.categoria).subscribe(
      response=>{
        if(!response){
          this.status = "error"
        }else{
          this.status = "Success"
          if(response.description === 'Eliminado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
              duration: 3100, horizontalPosition: 'end'
            });
          }
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status = "error";
        }
      }
    )
  }
}

@Component({
  selector: 'agregar-categorias-sib',
  templateUrl: 'agregar-categorias-sib.html',
  styleUrls: ['./categorias-sib.component.scss'],
  providers:[CategoriaService]
})
export class AgregarCategoriasSib {
  public categoria : Categoria;
  public status;

  constructor(
    public dialogRef: MatDialogRef<AgregarCategoriasSib>, private snackBar: MatSnackBar, private _categoriaService : CategoriaService) {
      this.categoria = new Categoria ("","","");
    }

   

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearCategoria(){
    this.categoria.empresa = "1";
    this._categoriaService.crearCategoria(this.categoria).subscribe(
      response => {
        if(response){
          this.status = 'ok';
          if(response.description === 'Agregado correctamente'){
            this.dialogRef.close();
            this.snackBar.open(response.description, "", {panelClass: ['colorBueno'],
              duration: 2100, horizontalPosition: 'end'
            });
          }else{
            this.snackBar.open(response.description, "", {panelClass: ['colorError'],
              duration: 3100, horizontalPosition: 'end'
            });
          }
          
        }
      },
      error => {
          if(error){
          console.log(<any>error);
          this.status = 'error';
          this.snackBar.open("Verifique los datos!", "", { panelClass: ['colorError'],
          duration: 3100, horizontalPosition: 'end'
          });
        }
      }

    )
  }
}



@Component({
  selector: 'ver-categoria',
  templateUrl: 'ver-categoria.html',
  styleUrls: ['./categorias-sib.component.scss'],
  providers : [CategoriaService]

})
export class VerCategoria implements OnInit{

  ngOnInit() {
    this.categoria.codigo = codigo;
    this.categoria.descripcion = descripcion;
    this.categoria.empresa = empresa;
    //this.buscarAseguradora();
  }
  
  public categoria : Categoria;
  public status;


  constructor(
    public dialogRef: MatDialogRef<VerCategoria>,private snackBar: MatSnackBar) {
      this.categoria = new Categoria("","","");

    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  


}