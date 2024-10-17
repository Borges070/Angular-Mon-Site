import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { InicialComponent } from './inicial/inicial.component';
import { HeaderComponent } from './header/header.component';
import { CriadoresComponent } from './criadores/criadores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InicialComponent],
  styles: "",
  // template: "",
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang';
}
