import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private ingresar: boolean = false;
  constructor() {}

  public ingresarAplicativo(obj: any): boolean {
    this.ingresar = obj.usuario == 'santi' && obj.password == '1234';
    return this.ingresar;
  }

  public habilitarLogueo() {
    return this.ingresar;
  }

  public cerrarSesion(): void {
    this.ingresar = false;
  }
}
