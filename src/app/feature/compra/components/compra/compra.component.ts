import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../../articulo/shared/model/articulo';
import { ArticuloService } from '../../../articulo/shared/service/articulo.service';
import { CompraService } from '../../shared/service/compra.service';
import { Compra } from '../../shared/model/compra';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  public listaArticulos: Articulo[];

  constructor(private articuloService: ArticuloService, private compraService: CompraService) { }

  ngOnInit(): void {
    this.consultarArticulosDisponibles();
  }

  private consultarArticulosDisponibles(){
    this.articuloService.consultar().subscribe(response =>{
      this.listaArticulos = response;
    });
  }

  comprar(articulo: Articulo){
    this.compraService.comprar(articulo).subscribe(response => {
      //console.log(response['valor'].id)
      const compra: Compra = response['valor'];
      window.alert(`Compra Exitosa \n
                    id: ${compra.id}  \n
                    articulo: ${compra.articulo}  \n
                    cantidad: ${compra.cantidad}  \n
                    valor unidad: ${compra.valorUnidad}  \n
                    valor total: ${compra.valorTotal}  \n
                    fecha de compra: ${compra.fechaCompra}`);      
    });
  }
 
}
