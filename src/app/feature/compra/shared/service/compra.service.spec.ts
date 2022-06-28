import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { CompraService } from './compra.service';
import { HttpService } from '../../../../core/services/http.service';
import { Articulo } from '../../../articulo/shared/model/articulo';
import { Compra } from '../model/compra';
import { HttpResponse } from '@angular/common/http';

describe('CompraService', () => {
  let service: CompraService;
  let httpMock: HttpTestingController;
  const apiEndPointCompra = `${environment.endpoint}/compra`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería crear una compra', () => {
    const dummyArticulo: Articulo = {id: 1, tipoFlor: 'Rosas', cantidadDisponible: 20, valorUnidad: 2000, fechaCreacion: new Date};
    const dummyCompra: Compra = {id: 1, articulo: 'Rosas', cantidad: 20, valorUnidad: 2000, valorTotal: 40000, fechaCompra: new Date}
    service.comprar(dummyArticulo).subscribe((respuesta) => {
        expect(respuesta).toEqual(dummyCompra);
    });
    const req = httpMock.expectOne(apiEndPointCompra + '/1');
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Compra>({body:{
      id: 1, articulo: 'Rosas', cantidad: 20, valorUnidad: 2000, valorTotal: 40000, fechaCompra: new Date
    }}));
  });
});
