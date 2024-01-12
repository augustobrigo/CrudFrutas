import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fruta } from './fruta';
@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

  constructor(private httpCliente: HttpClient) { }
  leerProductos():Observable<Fruta[]>{
    return this.httpCliente.get<Fruta[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
}
createProduct(fruta: Fruta): Observable<Fruta>{
  console.log("producto"+fruta.id)
  return this.httpCliente.post<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', fruta);
}
}
