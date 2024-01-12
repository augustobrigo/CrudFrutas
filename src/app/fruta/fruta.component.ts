import { Component } from '@angular/core';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
actualizarProducto(_t46: any) {
}
crearProducto(form: { value: Fruta; }){
  console.log("estoy en ts "+form.value.id)
   this.httpCliente.createProduct(form.value).subscribe((producto:Fruta)=>{this.prod = producto});
    }
    prod!: Fruta;
selectedProduct: Fruta = {
  id: '',
  nombre: '',
  precio: 0,
  unidades:0,
  imagen:''
}

  frutas!: Fruta[];
  constructor(private httpCliente:ServicioFService){
    this.httpCliente.leerProductos().subscribe(x=>this.frutas=x)
  }

  eliminar(id:string) {

  }
  modififcar() {
  }
}
