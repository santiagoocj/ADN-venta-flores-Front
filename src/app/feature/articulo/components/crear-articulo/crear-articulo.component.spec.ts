import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ArticuloService } from '../../shared/service/articulo.service';

import { CrearArticuloComponent } from './crear-articulo.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';

describe('CrearArticuloComponent', () => {
  let component: CrearArticuloComponent;
  let fixture: ComponentFixture<CrearArticuloComponent>;
  let articuloService: ArticuloService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      declarations: [ CrearArticuloComponent ],
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
    fixture = TestBed.createComponent(CrearArticuloComponent);
    component = fixture.componentInstance;
    articuloService = TestBed.inject(ArticuloService);
    spyOn(articuloService, 'guardar').and.returnValue(of(1));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario es inválido cuando este vacio', () => {
    expect(component.articuloForm.valid).toBeFalsy();
  });

  it('Registrando articulo', () => {
    expect(component.articuloForm.valid).toBeFalsy();
    component.articuloForm.controls.tipoFlor.setValue('Rosas');
    component.articuloForm.controls.cantidadDisponible.setValue(20);
    component.articuloForm.controls.valorUnidad.setValue(2000);

    spyOn(window, 'alert').and.callFake(() => console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).toHaveBeenCalled();
  });

  it('No registrar articulo', () => {
    expect(component.articuloForm.valid).toBeFalsy();
    component.articuloForm.controls.tipoFlor.setValue('Rosas');
    expect(component.articuloForm.valid).toBeFalsy();

    spyOn(window, 'alert').and.callFake(() => console.log('ejecuto alert'));
    component.crear();

    expect(window.alert).not.toHaveBeenCalled();
  });
});
