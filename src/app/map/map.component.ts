import Swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { CargarMapService } from '../services/cargar-map.service';
import { AutenticacionService } from '../services/autenticacion.service';
import { ServicioComunicacionService } from '../services/servicio-comunicacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  checkboxstate: boolean = false;
  checkboxarmarios: boolean = false;
  constructor(
    public mapService: CargarMapService,
    private authService: AutenticacionService,
    private checkboxService: ServicioComunicacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mapService.initializeMap();
  }
  cerrarSesion(): void {
    Swal.fire({
      title: 'Cerrar Sesión',
      text: '¿Estás seguro de que deseas cerrar sesión?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesión',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.cerrarSesion();
        this.router.navigate(['/Login']);
      }
    });
  }
  Arpon(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'LayerArpon',
      estado: this.checkboxstate,
    });
  }
  Armarios(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerArmarios',
      estado: this.checkboxstate,
    });
  }
  TextoRurales(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerTextRurales',
      estado: this.checkboxstate,
    });
  }
  Taps(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerTaps',
      estado: this.checkboxstate,
    });
  }
  Fibra(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerFibra',
      estado: this.checkboxstate,
    });
  }
  NAPS(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerNaps',
      estado: this.checkboxstate,
    });
  }
  Cajas(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerCajas',
      estado: this.checkboxstate,
    });
  }
  HFC(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerHFC',
      estado: this.checkboxstate,
    });
  }
  Strip(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerStrip',
      estado: this.checkboxstate,
    });
  }
  GabinetesOp(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerGabinetesOpticos',
      estado: this.checkboxstate,
    });
  }
  NodosOp(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerNodos',
      estado: this.checkboxstate,
    });
  }
  Postes(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerPostes',
      estado: this.checkboxstate,
    });
  }
  Camaras(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerCamaras',
      estado: this.checkboxstate,
    });
  }
  Carcamos(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerCarcamos',
      estado: this.checkboxstate,
    });
  }
  CableCoaxial(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerCoaxial',
      estado: this.checkboxstate,
    });
  }
  Tramos(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerTramos',
      estado: this.checkboxstate,
    });
  }
  FibraOptica(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerFibraOptica',
      estado: this.checkboxstate,
    });
  }
  ReservaFO(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerReservaFO',
      estado: this.checkboxstate,
    });
  }
  LimitesRurales(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerLimitesRurales',
      estado: this.checkboxstate,
    });
  }
  ConstruccionesRU(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerConstrucciones',
      estado: this.checkboxstate,
    });
  }
  ZonificacionArpones(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerZonificacion',
      estado: this.checkboxstate,
    });
  }
  AreaMSAN(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerMSAN',
      estado: this.checkboxstate,
    });
  }
  AreaNodos(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerAreaNods',
      estado: this.checkboxstate,
    });
  }
  Mantenimiento(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerMantenimiento',
      estado: this.checkboxstate,
    });
  }
  AreaDistrito(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerDistrito',
      estado: this.checkboxstate,
    });
  }
  AreaCentral(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerCentral',
      estado: this.checkboxstate,
    });
  }
  Placas(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerPlacas',
      estado: this.checkboxstate,
    });
  }
  Lotes(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerLotes',
      estado: this.checkboxstate,
    });
  }
  MallaVial(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerMallaVial',
      estado: this.checkboxstate,
    });
  }
  Hidrografia(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerHidrografia',
      estado: this.checkboxstate,
    });
  }
  LimitesConstrucion(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerLimitesConstruccion',
      estado: this.checkboxstate,
    });
  }
  Manzanas(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerMnazanas',
      estado: this.checkboxstate,
    });
  }
  Estratificacion(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerEstratificacion',
      estado: this.checkboxstate,
    });
  }
  Barrios(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerBarrios',
      estado: this.checkboxstate,
    });
  }
  Municipios(): void {
    this.checkboxstate = !this.checkboxstate;
    this.checkboxService.checkboxstate.next({
      servicio: 'layerMunicipio',
      estado: this.checkboxstate,
    });
  }
}
