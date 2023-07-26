import { Component } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GismartWeb';

  constructor(private loginPrd: AutenticacionService) {}
  public visualizarMenu(): boolean {
    return this.loginPrd.habilitarLogueo();
  }
}
