import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../shared/model/articulo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticuloService } from '../../shared/service/articulo.service'; 

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.css']
})
export class EditarArticuloComponent implements OnInit {
  articuloEditar: Articulo;
  articuloForm: FormGroup;
  constructor(protected location: Location, protected articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulo();
    this.construirFormularioArticulo();
  }

  private construirFormularioArticulo(){
    this.articuloForm = new FormGroup({
      id: new FormControl(this.articuloEditar.id),
      tipoFlor: new FormControl(this.articuloEditar.tipoFlor, [Validators.required]),
      cantidadDisponible: new FormControl(this.articuloEditar.cantidadDisponible, [Validators.required]),
      valorUnidad: new FormControl(this.articuloEditar.valorUnidad, [Validators.required])
    })
  }

  private obtenerArticulo(){
    const data = this.location.getState() as Data;
    this.articuloEditar = data.articulo;
  }

  editar(){
    if(this.articuloForm.valid){
      this.articuloService.editar(this.articuloForm.value).subscribe(
        () => {
          window.alert('articulo editado');
        });
    }
  }

}

interface Data {
  articulo: Articulo;
  navigationId: number;
} 