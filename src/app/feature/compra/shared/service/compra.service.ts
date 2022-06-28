import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Articulo } from '../../../articulo/shared/model/articulo';
import { Compra } from '../model/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(protected http: HttpService) {}

  public comprar(articulo: Articulo){
    return this.http.doPost<number, Compra>(`${environment.endpoint}/compra/${articulo.id}`, articulo.id);
  }
}
