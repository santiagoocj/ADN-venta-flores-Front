import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../shared/model/articulo';
import { ArticuloService } from '../../shared/service/articulo.service';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.css']
})
export class ListarArticuloComponent implements OnInit {
  public listaArticulos: Articulo[] = [];

  constructor(protected articuloService: ArticuloService) { }

  ngOnInit(): void { 
    this.obtenerArticulos();
  }

  obtenerArticulos(){
    this.articuloService.consultar().subscribe(res => {
      this.listaArticulos = res;
    })
  }

  eliminar(articulo: Articulo){
    this.articuloService.eliminar(articulo).subscribe(() => {
      this.obtenerArticulos();
    })
  }

}
