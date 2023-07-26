import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioComunicacionService {
  checkboxstate: Subject<{ servicio: string; estado: boolean }> = new Subject<{
    servicio: string;
    estado: boolean;
  }>();
  constructor() {}
}
