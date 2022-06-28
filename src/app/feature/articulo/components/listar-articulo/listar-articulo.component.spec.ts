import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarArticuloComponent } from './listar-articulo.component';
import { ArticuloService } from '../../shared/service/articulo.service';
import { Articulo } from '../../shared/model/articulo';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '../../../../core/services/http.service';

describe('ListarArticuloComponent', () => {
  let component: ListarArticuloComponent;
  let fixture: ComponentFixture<ListarArticuloComponent>;
  let articuloService: ArticuloService;
  const listaArticulos: Articulo[] = [
    {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 1000, fechaCreacion: new Date},
    {id: 2, tipoFlor: 'Hortencia', cantidadDisponible: 30, valorUnidad: 2000, fechaCreacion: new Date}]
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ ListarArticuloComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ArticuloService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarArticuloComponent);
    component = fixture.componentInstance;
    articuloService = TestBed.inject(ArticuloService);
    spyOn(articuloService, 'consultar').and.returnValue(of(listaArticulos));
    fixture.detectChanges();
  });

  it('Deberia listar los articulos', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    expect(2).toBe(component.listaArticulos.length);
  });

  it('Deberia eliminar el articulo seleccionado', () => {
    expect(component).toBeTruthy();
    const dummyArticulo: Articulo = {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date}
    component.eliminar(dummyArticulo);
  })

  afterEach(() => { TestBed.resetTestingModule(); });
  afterAll(() => { TestBed.resetTestingModule(); });
});
