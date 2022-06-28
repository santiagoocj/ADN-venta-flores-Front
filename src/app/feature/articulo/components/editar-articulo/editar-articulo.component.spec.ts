import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArticuloComponent } from './editar-articulo.component';
import { Articulo } from '../../shared/model/articulo';
import { CommonModule, Location } from '@angular/common';
import { of } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloService } from '../../shared/service/articulo.service';
import { HttpService } from '../../../../core/services/http.service';

interface Data {
  articulo: Articulo;
  navigationId: number;
} 

describe('EditarArticuloComponent', () => {
  let component: EditarArticuloComponent;
  let fixture: ComponentFixture<EditarArticuloComponent>;
  let location: Location;
  let articuloService: ArticuloService;
  let data: Data = 
  {
    articulo: {id: 7, tipoFlor: 'Girasol', cantidadDisponible: 45, valorUnidad: 2000, fechaCreacion: new Date},
    navigationId: 2
  }

  let locationStub = {
    getState(){
      return data;
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarArticuloComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ArticuloService, HttpService, {provide: Location, useValue: locationStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarArticuloComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    articuloService = TestBed.inject(ArticuloService);
    spyOn(articuloService, 'editar').and.returnValue(of(7));
  });


  it('Articulo deberia ser indefinido', () => {
    expect(component.articuloEditar).toBeUndefined();
  });

  it('Deberia traer el articulo', () => {
    fixture.detectChanges();
    const articulo = location.getState();
    expect(articulo).toEqual(data);
  })

  it('Deberia editar la propiedad tipo flor del articulo obtenido', () => {
    fixture.detectChanges();
    component.articuloForm.controls.tipoFlor.setValue('Rosas');
    spyOn(window, 'alert').and.callFake(() => console.log('ejecuto alert'));
    component.editar();
    expect(window.alert).toHaveBeenCalled();
  });

  
});
