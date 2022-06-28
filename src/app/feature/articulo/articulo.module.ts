import { NgModule } from "@angular/core";
import { ArticuloRoutingModule } from "./articulo-routing.module";
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';
import { SharedModule } from '../../shared/shared.module';
import { ArticuloService } from './shared/service/articulo.service';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ListarArticuloComponent } from './components/listar-articulo/listar-articulo.component';
import { EditarArticuloComponent } from './components/editar-articulo/editar-articulo.component';

@NgModule({
    declarations: [
        CrearArticuloComponent,
        ArticuloComponent,
        ListarArticuloComponent,
        EditarArticuloComponent
    ], 
    imports: [
        ArticuloRoutingModule,
        SharedModule
    ],
    providers: [ArticuloService]
})

export class ArticuloModule{}