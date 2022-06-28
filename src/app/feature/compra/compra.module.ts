import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { CompraRoutingModule } from "./compra-routing.module";
import { CompraComponent } from './components/compra/compra.component';
import { CompraService } from "./shared/service/compra.service";

@NgModule({
    imports:[
        CompraRoutingModule,
        SharedModule
    ],
    declarations: [
      CompraComponent
    ],
    providers: [
        CompraService
    ]
})

export class CompraModule{}