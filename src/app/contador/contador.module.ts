import { NgModule } from "@angular/core";
import { contadorCompnent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        contadorCompnent
    ],
    exports:[
        contadorCompnent
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule{

}