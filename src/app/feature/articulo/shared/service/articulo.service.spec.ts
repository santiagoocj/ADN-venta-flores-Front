import { TestBed } from '@angular/core/testing';

import { ArticuloService } from './articulo.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Articulo } from '../model/articulo';
import { HttpResponse } from '@angular/common/http';
import { HttpService } from '../../../../core/services/http.service';

describe('ArticuloService', () => {
  let service: ArticuloService;
  let httpMock: HttpTestingController;
  const apiEndPointArticulos = `${environment.endpoint}/articulo`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticuloService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ArticuloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería crear un articulo', () => {
    const dummyArticulo: Articulo = {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date}
    service.guardar(dummyArticulo).subscribe((respuesta) => {
        expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndPointArticulos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body:1}));
  });

  it('Deberia listar articulos', () => {
    const dummyArticulos = [{id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date},
    {id: 2, tipoFlor: 'Hortencia', cantidadDisponible: 30, valorUnidad: 1000, fechaCreacion: new Date}];
    
    service.consultar().subscribe(articulos => {
      expect(articulos.length).toBe(2);
      expect(articulos).toEqual(dummyArticulos);
    });
    const req = httpMock.expectOne(apiEndPointArticulos);
    expect(req.request.method).toBe('GET'); 
    req.flush(dummyArticulos);
  });

  it('Deberia eliminar un articulo', () => {
    const dummyArticulo: Articulo = {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date}
    service.eliminar(dummyArticulo).subscribe();
    const req = httpMock.expectOne(`${apiEndPointArticulos}/1`);
    expect(req.request.method).toBe('DELETE');
  });

  it('Debería editar un articulo', () => {
    const dummyArticulo: Articulo = {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date}
    service.editar(dummyArticulo).subscribe((resp) => {
      expect(resp).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndPointArticulos);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<number>({body:1}));
  })
});
 