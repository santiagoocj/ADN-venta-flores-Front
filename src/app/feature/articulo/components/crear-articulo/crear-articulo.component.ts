import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticuloService } from '../../shared/service/articulo.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css']
})
export class CrearArticuloComponent implements OnInit {
  articuloForm: FormGroup;

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.construirFormularioArticulo();
  }

  crear(){
    if(this.articuloForm.valid){
      this.articuloService.guardar(this.articuloForm.value).subscribe(
        () => {
          window.alert('articulo creado'); 
        });
    }
  }

  private construirFormularioArticulo(){
    this.articuloForm = new FormGroup({
      tipoFlor: new FormControl('', [Validators.required]),
      cantidadDisponible: new FormControl('', [Validators.required]),
      valorUnidad: new FormControl('', [Validators.required])
    });
  }
 
}
