import { Injectable } from '@angular/core';
import { Articulo } from '../model/articulo';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(protected http: HttpService) { }

  public guardar(articulo: Articulo){
    return this.http.doPost<Articulo, number>(`${environment.endpoint}/articulo`, articulo);
  }

  public consultar(){
    return this.http.doGet<Articulo[]>(`${environment.endpoint}/articulo`);
  }

  public eliminar(articulo: Articulo){
    return this.http.doDelete(`${environment.endpoint}/articulo/${articulo.id}`);
  }

  public editar(articulo: Articulo){
    return this.http.doPut<Articulo, number>(`${environment.endpoint}/articulo`, articulo);
  }
}
 