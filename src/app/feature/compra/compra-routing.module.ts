import { NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CompraComponent } from './components/compra/compra.component';

const routes: Routes = [{
    path: 'compra',
    component: CompraComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompraRoutingModule{}