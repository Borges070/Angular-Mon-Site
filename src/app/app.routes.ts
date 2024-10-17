import { Routes } from '@angular/router';

import { CriadoresComponent } from './criadores/criadores.component';
import { CompraComponent } from './compra/compra.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InicialComponent } from './inicial/inicial.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: "", component:InicialComponent},
    {path: "criadores", component:CriadoresComponent},
    {path: "compra", component:CompraComponent},
    {path: "carrinho", component:CarrinhoComponent},
];
