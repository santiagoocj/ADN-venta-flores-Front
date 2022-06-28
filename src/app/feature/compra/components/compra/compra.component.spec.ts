import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticuloService } from 'src/app/feature/articulo/shared/service/articulo.service';

import { CompraComponent } from './compra.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { Articulo } from '../../../articulo/shared/model/articulo';
import { of } from 'rxjs';

describe('CompraComponent', () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;
  let articuloService: ArticuloService;
   const listaArticulos: Articulo[] = [
    {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 1000, fechaCreacion: new Date},
    {id: 2, tipoFlor: 'Hortencia', cantidadDisponible: 30, valorUnidad: 2000, fechaCreacion: new Date},
    { id: 7, tipoFlor: 'Girasol', cantidadDisponible: 45, valorUnidad: 2000.00, fechaCreacion: new Date}]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ArticuloService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    articuloService = TestBed.inject(ArticuloService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe traer los articulos disponibles', () => {
    spyOn(articuloService,'consultar').and.returnValue(of(listaArticulos));
    fixture.detectChanges();
    expect(3).toBe(component.listaArticulos.length);
  });

});
