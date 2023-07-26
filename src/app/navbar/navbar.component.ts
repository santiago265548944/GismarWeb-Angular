import { Component, OnInit, Input } from '@angular/core';
import { CargarMapService } from '../services/cargar-map.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // @Input() view: mapContainer;
  constructor(public cagarMapService: CargarMapService) {}

  ngOnInit(): void {
    const identifyUrl =
      'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer';
    const layersIds = [34];
    this.cagarMapService.initializeIdentifyTask(identifyUrl, layersIds);
  }
  zoomIn(): void {
    this.cagarMapService.zoomIn();
  }
  zoomOut() {
    this.cagarMapService.zoomOut();
  }
  vistaTotal(): void {
    this.cagarMapService.goHome();
  }

  anterior() {
    // this.cagarMapService.showPreviousLayer();
  }
  siguiente() {
    // this.cagarMapService.showNextLayer();
  }
  startMeasurement(): void {
    this.cagarMapService.initializeMeasurementWidget();
  }

  stopMeasurement(): void {
    this.cagarMapService.stopMeasurement();
    this.cagarMapService.disableBasemapGallery();
  }

  // identify(event: any) {
  //   const mapPoint = event.mapPoint;
  //   const mapExtent = this.view.extent;

  //   this.cagarMapService
  //     .identifyFeatures(mapPoint, mapExtent)
  //     .then((results: any[]) => {
  //       // Procesa los resultados de la identificación
  //       console.log(results);
  //     })
  //     .catch((error: any) => {
  //       // Maneja el error de identificación
  //       console.error(error);
  //     });
  // }
  basemapGallery(): void {
    this.cagarMapService
      .initializeBasemapGallery()
      .then(() => {
        // La galería de base de mapas se ha inicializado correctamente
      })
      .catch((error) => {
        console.error(
          'Error al inicializar la galería de base de mapas:',
          error
        );
      });
  }
}
