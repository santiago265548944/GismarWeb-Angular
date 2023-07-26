import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public myForms!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginPrd: AutenticacionService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myForms = this.createMyForms();
  }
  private createMyForms(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  public subtmiFormulario() {
    if (this.myForms.invalid) {
      Object.values(this.myForms.controls).forEach((control) => {
        control.markAllAsTouched();
      });
      return;
    }
    if (!this.loginPrd.ingresarAplicativo(this.myForms.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario o Contraseña inválido',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Ingreso exitoso',
        text: 'El usuario ha podido ingresar correctamente.',
      });
      this.router.navigate(['/Home']);
    }
  }

  public get f(): any {
    return this.myForms.controls;
  }
}
