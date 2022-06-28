import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloComponent } from "./components/articulo/articulo.component";
import { CrearArticuloComponent } from "./components/crear-articulo/crear-articulo.component";
import { EditarArticuloComponent } from './components/editar-articulo/editar-articulo.component';
import { ListarArticuloComponent } from './components/listar-articulo/listar-articulo.component';

const routes: Routes = [
    {
        path: 'articulo',
        component: ArticuloComponent,
        children: [
            {
                path: 'crear',
                component: CrearArticuloComponent
            },
            {
                path: 'listar',
                component: ListarArticuloComponent
            },
            {
                path: 'editar',
                component: EditarArticuloComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ArticuloRoutingModule{}