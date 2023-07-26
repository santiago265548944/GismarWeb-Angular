import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import { ServicioComunicacionService } from './servicio-comunicacion.service';

@Injectable({
  providedIn: 'root',
})
export class CargarMapService {
  public vistaMapa: any;
  private map: any; // Variable para almacenar la referencia al mapa
  private home: any;
  private view: any;
  private measurementWidget: any;
  private identifyTask: any;
  private identifyParams: any;
  public basemapgallery: any;
  public bgExpand: any;
  private searchWidget: any;

  constructor(private checkboxService: ServicioComunicacionService) {}

  initializeMap(): void {
    loadModules(
      [
        'esri/Map',
        'esri/views/MapView',
        'esri/config',
        'esri/widgets/BasemapGallery',
        'esri/widgets/Expand',
        'esri/layers/FeatureLayer',
        'esri/widgets/Home',
        'esri/widgets/Measurement',
        'esri/rest/identify',
        'esri/rest/support/IdentifyParameters',
        'esri/widgets/DistanceMeasurement2D',
        'esri/widgets/AreaMeasurement2D',
        'esri/widgets/Search',
      ],
      {
        css: true,
      }
    )
      .then(
        ([
          Map,
          MapView,
          esriConfig,
          Expand,
          BasemapGallery,
          FeatureLayer,
          Home,
          Measurement,
          Identify,
          IdentifyParameters,
          AreaMeasurement2D,
          DistanceMeasurement2D,
          Search,
        ]) => {
          this.map = new Map({
            basemap: 'arcgis-navigation',
          });
          esriConfig.apiKey =
            'AAPKf962fbaaf4544dd3be31c3ff3f70dd8d3-5v9dkJkINCUjZDZ1SY3wV2_qldc1i3H8vR0AVQOM_BvXQOC_v2yyt9XL1xsmd0';

          this.view = new MapView({
            map: this.map,
            extent: {
              xmin: 1152435.69603,
              ymin: 1024214.064459,
              xmax: 1153279.189384,
              ymax: 1024587.656872,
              spatialReference: 3115,
            },
            zoom: 8,
            container: 'mapContainer',
          });
          const layerArpon = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/0',
            title: 'ETP_LYR_CUBEMP_FO',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerArmarios = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/1',
            title: 'ETP_LYR_ARMARIOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          // this.map.add(layerArmarios);
          const layerTextRurales = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/2',
            title: 'ETP_LYR_TEXTOS_RURAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerTaps = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/3',
            title: 'ETP_LYR_TAPS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerFibra = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/4',
            title: 'ETP_LYR_MDU_FO',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerNaps = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/5',
            title: 'ETP_LYR_CUB_NAP',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerCajas = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/6',
            title: 'ETP_LYR_CAJAS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerHFC = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/7',
            title: 'ETP_LYR_MDU',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerStrip = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/8',
            title: 'ETP_LYR_STRIPS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerGabinetesOpticos = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/9',
            title: 'ETP_LYR_GABINETE_FO',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerNodos = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/10',
            title: 'ETP_LYR_NODO_FO',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerPostes = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/11',
            title: 'ETP_LYR_POSTES',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerCamaras = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/12',
            title: 'ETP_LYR_CAMARAS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerCarcamos = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/13',
            title: 'ETP_LYR_CARCAMOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerCoaxial = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/14',
            title: 'ETP_LYR_CABLE_COAXIAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerTramos = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/15',
            title: 'ETP_LYR_TRAMOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerFibraOptica = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/16',
            title: 'ETP_LYR_FIBRA',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerReservaFO = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/17',
            title: 'ETP_LYR_RESERVAS_OPT',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerLimitesRurales = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/18',
            title: 'ETP_LYR_MANZANAS_RURAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerConstrucciones = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/19',
            title: 'ETP_LYR_LOTES_RURAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerZonificacion = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/20',
            title: 'ETP_LYR_ZONA_ARPON',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerMSAN = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/21',
            title: 'ETP_LYR_AREA_MSAN',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerAreaNods = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/22',
            title: 'ETP_LYR_AREA_NODOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerMantenimiento = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/23',
            title: 'ETP_LYR_MUNICIPIOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerDistrito = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/24',
            title: 'ETP_LYR_AREA_DISTRITO',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerCentral = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/25',
            title: 'ETP_LYR_AREA_CENTRAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerPlacas = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/26',
            title: 'ETP_LYR_PLACAS_LOTES',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerLotes = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/27',
            title: 'ETP_LYR_LOTES',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerMallaVial = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/28',
            title: 'ETP_LYR_MALLA_VIAL',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerHidrografia = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/29',
            title: 'ETP_LYR_HIDROGRAFIA',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerLimitesConstruccion = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/30',
            title: 'ETP_LYR_LIMITE_MANZANAS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerMnazanas = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/31',
            title: 'ETP_LYR_MANZANAS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerEstratificacion = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/32',
            title: 'ETP_LYR_ESTRATIFICACION',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          const layerBarrios = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/33',
            title: 'ETP_LYR_BARRIOS',
            popupTemplate: {
              // title: 'DEPARTAMENTO',
              // content:
              //   'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });

          const layerMunicipio = new FeatureLayer({
            url: 'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/34',
            title: 'ETP_LYR_MUNICIPIOS',
            // visible: true,
            popupTemplate: {
              title: 'Municipios',
              content:
                'OBJECTID: {OBJECTID},<br>ETIQUETA: {TAG},<br>CODIGO DEPARTAMENTO: {CODIGO},<br>NOMBRE DEPARTAMENTO: {NOMBRE},<br>IDUBICACIONGEOGRAFICA: {IDUBICACIONGEOGRAFICA},<br>GLOBALID: {GLOBALID}',
            },
          });
          // this.map.add(layerMunicipio);

          // Suscribirse al Subject checkboxState
          this.checkboxService.checkboxstate.subscribe(
            (checkboxData: { servicio: string; estado: boolean }) => {
              const { servicio, estado } = checkboxData;

              // Activar o desactivar la capa correspondiente según el estado del checkbox
              switch (servicio) {
                case 'layerArpon':
                  if (estado) {
                    this.map.add(layerArpon);
                  } else {
                    this.map.remove(layerArpon);
                  }
                  break;
                case 'layerArmarios':
                  if (estado) {
                    this.map.add(layerArmarios);
                  } else {
                    this.map.remove(layerArmarios);
                  }
                  break;
                case 'layerTextRurales':
                  if (estado) {
                    this.map.add(layerTextRurales);
                  } else {
                    this.map.remove(layerTextRurales);
                  }
                  break;
                case 'layerTaps':
                  if (estado) {
                    this.map.add(layerTaps);
                  } else {
                    this.map.remove(layerTaps);
                  }
                  break;
                case 'layerFibra':
                  if (estado) {
                    this.map.add(layerFibra);
                  } else {
                    this.map.remove(layerFibra);
                  }
                  break;
                case 'layerNaps':
                  if (estado) {
                    this.map.add(layerNaps);
                  } else {
                    this.map.remove(layerNaps);
                  }
                  break;
                case 'layerCajas':
                  if (estado) {
                    this.map.add(layerCajas);
                  } else {
                    this.map.remove(layerCajas);
                  }
                  break;
                case 'layerHFC':
                  if (estado) {
                    this.map.add(layerHFC);
                  } else {
                    this.map.remove(layerHFC);
                  }
                  break;
                case 'layerStrip':
                  if (estado) {
                    this.map.add(layerStrip);
                  } else {
                    this.map.remove(layerStrip);
                  }
                  break;
                case 'layerGabinetesOpticos':
                  if (estado) {
                    this.map.add(layerGabinetesOpticos);
                  } else {
                    this.map.remove(layerGabinetesOpticos);
                  }
                  break;
                case 'layerNodos':
                  if (estado) {
                    this.map.add(layerNodos);
                  } else {
                    this.map.remove(layerNodos);
                  }
                  break;
                case 'layerPostes':
                  if (estado) {
                    this.map.add(layerPostes);
                  } else {
                    this.map.remove(layerPostes);
                  }
                  break;
                case 'layerCamaras':
                  if (estado) {
                    this.map.add(layerCamaras);
                  } else {
                    this.map.remove(layerCamaras);
                  }
                  break;
                case 'layerCarcamos':
                  if (estado) {
                    this.map.add(layerCarcamos);
                  } else {
                    this.map.remove(layerCarcamos);
                  }
                  break;
                case 'layerCoaxial':
                  if (estado) {
                    this.map.add(layerCoaxial);
                  } else {
                    this.map.remove(layerCoaxial);
                  }
                  break;
                case 'layerTramos':
                  if (estado) {
                    this.map.add(layerTramos);
                  } else {
                    this.map.remove(layerTramos);
                  }
                  break;
                case 'layerFibraOptica':
                  if (estado) {
                    this.map.add(layerFibraOptica);
                  } else {
                    this.map.remove(layerFibraOptica);
                  }
                  break;
                case 'layerReservaFO':
                  if (estado) {
                    this.map.add(layerReservaFO);
                  } else {
                    this.map.remove(layerReservaFO);
                  }
                  break;
                case 'layerLimitesRurales':
                  if (estado) {
                    this.map.add(layerLimitesRurales);
                  } else {
                    this.map.remove(layerLimitesRurales);
                  }
                  break;
                case 'layerConstrucciones':
                  if (estado) {
                    this.map.add(layerConstrucciones);
                  } else {
                    this.map.remove(layerConstrucciones);
                  }
                  break;
                case 'layerZonificacion':
                  if (estado) {
                    this.map.add(layerZonificacion);
                  } else {
                    this.map.remove(layerZonificacion);
                  }
                  break;
                case 'layerMSAN':
                  if (estado) {
                    this.map.add(layerMSAN);
                  } else {
                    this.map.remove(layerMSAN);
                  }
                  break;
                case 'layerAreaNods':
                  if (estado) {
                    this.map.add(layerAreaNods);
                  } else {
                    this.map.remove(layerAreaNods);
                  }
                  break;
                case 'layerMantenimiento':
                  if (estado) {
                    this.map.add(layerMantenimiento);
                  } else {
                    this.map.remove(layerMantenimiento);
                  }
                  break;
                case 'layerDistrito':
                  if (estado) {
                    this.map.add(layerDistrito);
                  } else {
                    this.map.remove(layerDistrito);
                  }
                  break;
                case 'layerCentral':
                  if (estado) {
                    this.map.add(layerCentral);
                  } else {
                    this.map.remove(layerCentral);
                  }
                  break;
                case 'layerPlacas':
                  if (estado) {
                    this.map.add(layerPlacas);
                  } else {
                    this.map.remove(layerPlacas);
                  }
                  break;
                case 'layerLotes':
                  if (estado) {
                    this.map.add(layerLotes);
                  } else {
                    this.map.remove(layerLotes);
                  }
                  break;
                case 'layerMallaVial':
                  if (estado) {
                    this.map.add(layerMallaVial);
                  } else {
                    this.map.remove(layerMallaVial);
                  }
                  break;
                case 'layerHidrografia':
                  if (estado) {
                    this.map.add(layerHidrografia);
                  } else {
                    this.map.remove(layerHidrografia);
                  }
                  break;
                case 'layerLimitesConstruccion':
                  if (estado) {
                    this.map.add(layerLimitesConstruccion);
                  } else {
                    this.map.remove(layerLimitesConstruccion);
                  }
                  break;
                case 'layerMnazanas':
                  if (estado) {
                    this.map.add(layerMnazanas);
                  } else {
                    this.map.remove(layerMnazanas);
                  }
                  break;
                case 'layerEstratificacion':
                  if (estado) {
                    this.map.add(layerEstratificacion);
                  } else {
                    this.map.remove(layerEstratificacion);
                  }
                  break;
                case 'layerBarrios':
                  if (estado) {
                    this.map.add(layerBarrios);
                  } else {
                    this.map.remove(layerBarrios);
                  }
                  break;
                case 'layerMunicipio':
                  if (estado) {
                    this.map.add(layerMunicipio);
                  } else {
                    this.map.remove(layerMunicipio);
                  }
                  break;

                default:
                  break;
              }
            }
          );

          // Crear una instancia de IdentifyParameters
          // const identifyParams = new IdentifyParameters();
          // identifyParams.tolerance = 3;
          // identifyParams.layerIds = [34]; // ID de la capa que deseas identificar
          // identifyParams.layerOption = 'visible';

          // Definir la URL del servicio de mapas o capas
          // const serviceUrl =
          //   'http://testlab.g-gis.com/GFS/SpatialFeatureServer/services/ETP/redes/FeatureServer/34';

          // Realizar la identificación en un evento de clic en el mapa
          // this.view.on('click', (event: any) => {
          //   identifyParams.geometry = event.mapPoint;
          //   identifyParams.mapExtent = this.view.extent;

          //   identify
          //     .execute(serviceUrl, identifyParams)
          //     .then((response: any) => {
          //       if (response.results && response.results.length > 0) {
          //         // Aquí puedes acceder a los resultados y mostrar la información en tu aplicación
          //         console.log(response.results);
          //       }
          //     })
          //     .catch((error: any) => {
          //       console.error('Error al realizar la identificación:', error);
          //     });
          // });
          this.searchWidget = new Search({
            view: this.view,
          });
          // Adds the search widget below other elements in
          // the top left corner of the view
          this.view.ui.add(this.searchWidget, {
            position: 'top-left',
            index: 2,
          });

          this.home = new Home({
            view: this.view,
          });

          //BasemapGaleria
          this.basemapgallery = new BasemapGallery({
            view: this.view,
          });
        }
      )
      .catch((err) => {
        console.error(
          'Error al cargar los módulos de ArcGIS API para JavaScript:',
          err
        );
      });
  }

  zoomIn(): void {
    if (this.view) {
      this.view.goTo({
        zoom: this.view.zoom + 1,
      });
    }
  }

  zoomOut(): void {
    if (this.view) {
      this.view.goTo({
        zoom: this.view.zoom - 1,
      });
    }
  }

  initializeMeasurementWidget(): void {
    loadModules(['esri/widgets/DistanceMeasurement2D'], { css: true })
      .then(([DistanceMeasurement2D]) => {
        this.measurementWidget = new DistanceMeasurement2D({
          view: this.view,
        });

        this.view.ui.add(this.measurementWidget, 'top-left');
      })
      .catch((err) => {
        console.error('Error al cargar el módulo AreaMeasurement2D:', err);
      });
  }
  stopMeasurement(): void {
    if (this.measurementWidget) {
      this.view.ui.remove(this.measurementWidget);
      this.measurementWidget.destroy();
      this.measurementWidget = null;
    }
  }

  goHome(): void {
    if (this.view && this.home) {
      this.home.go();
    }
  }
  initializeBasemapGallery(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      loadModules(['esri/widgets/BasemapGallery'], { css: true })
        .then(([Expand]) => {
          this.bgExpand = new Expand({
            view: this.view,
            content: this.basemapgallery,
          });

          this.basemapgallery.watch('activeBasemap', () => {
            const mobileSize =
              this.view.heightBreakpoint === 'xsmall' ||
              this.view.widthBreakpoint === 'xsmall';

            if (mobileSize) {
              this.bgExpand.collapse();
            }
          });
          this.view.ui.add(this.bgExpand, 'top-left');

          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  disableBasemapGallery(): void {
    if (this.bgExpand) {
      this.view.ui.remove(this.bgExpand);
      this.bgExpand.destroy();
      this.bgExpand = null;
    }
  }
  initializeIdentifyTask(identifyUrl: string, layerIds: number[]) {
    loadModules([
      'esri/tasks/IdentifyTask',
      'esri/tasks/support/IdentifyParameters',
    ]).then(([IdentifyTask, IdentifyParameters]) => {
      this.identifyTask = new IdentifyTask({ url: identifyUrl });

      this.identifyParams = new IdentifyParameters();
      this.identifyParams.tolerance = 3;
      this.identifyParams.layerIds = layerIds;
      this.identifyParams.layerOption = 'visible';
    });
  }

  identifyFeatures(mapPoint: any, mapExtent: any): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.identifyTask || !this.identifyParams) {
        reject('Identify task is not initialized.');
        return;
      }

      this.identifyParams.geometry = mapPoint;
      this.identifyParams.mapExtent = this.view.extent;

      this.identifyTask
        .execute(this.identifyParams)
        .then((response: any) => {
          resolve(response.results);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
}
