import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  AnnotationLabel,
  ApexMarkers,
  ApexYAxis,
  ApexTooltip,
  ApexLegend,
  ApexAnnotations,
  ApexForecastDataPoints
} from "ng-apexcharts";

export type ChartOptions = {
  annotations:        /**/ ApexAnnotations;         // [annotations]          ="chartOptions.annotations"
  chart:              /**/ ApexChart;               // [chart]                ="chartOptions.chart"
  colors:             /**/ string[];                // [colors]               ="chartOptionsBrush.colors"
  dataLabels:         /**/ ApexDataLabels;          // [dataLabels]           ="chartOptions.dataLabels"
  forecastDataPoints: /**/ ApexForecastDataPoints;  // [forecastDataPoints]   ="chartOptions.forecastDataPoints"
  legend:             /**/ ApexLegend;              // [legend]               ="chartOptions.legend"
  markers:            /**/ ApexMarkers;             // [markers]              ="chartOptions.markers"
  series:             /**/ ApexAxisChartSeries;     // [series]               ="chartOptions.series"
  stroke:             /**/ ApexStroke;              // [stroke]               ="chartOptions.stroke"
  title:              /**/ ApexTitleSubtitle;       // [title]                ="chartOptions.title"
  tooltip:            /**/ ApexTooltip;             // [tooltip]              ="chartOptions.tooltip"
  xaxis:              /**/ ApexXAxis;               // [xaxis]                ="chartOptions.xaxis"
  yaxis:              /**/ ApexYAxis[];             // [yaxis]                ="chartOptionsBrush.yaxis"
};
export type ChartOptionsBrush = {
  chart:              /**/ ApexChart;               // [chart]                ="chartOptionsBrush.chart"
  colors:             /**/ string[];                // [colors]               ="chartOptionsBrush.colors"
  fill:               /**/ ApexFill;                // [fill]                 ="chartOptionsBrush.fill"
  forecastDataPoints: /**/ ApexForecastDataPoints;  // [forecastDataPoints]   ="chartOptions.forecastDataPoints"
  series:             /**/ ApexAxisChartSeries;     // [series]               ="chartOptionsBrush.series"
  xaxis:              /**/ ApexXAxis;               // [xaxis]                ="chartOptionsBrush.xaxis"
  yaxis:              /**/ ApexYAxis[];             // [yaxis]                ="chartOptionsBrush.yaxis"
};
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions | never;
  
  @ViewChild("chartBrush") chartBrush!: ChartComponent;
  public chartOptionsBrush: ChartOptionsBrush | never;

  constructor() {

    const COLOR_GREEN = '#00C853'; // #1'aprovadas
    const COLOR_RED = '#F44336'; // #2'negadas
    const COLOR_YELLOW = '#FDD835'; // #3'desfeitas
    
    const ID_CHART_MAIN = 'chart-grande'
    const ID_CHART_BRUSH = 'chart-pequeno'
    
    const NEGADAS_MAX:number = 100;

    const SERIES_DATA__APROVADAS = [
      [1672531200000, 61.27],[1672552800000, 408.44],[1672574400000, 659.77],[1672617600000, 383.24],[1672639200000, 215.29],[1672667280000, 18.42],[1672695360000, 160.7],[1672723440000, 419.5],[1672751520000, 65.92],[1672779600000, 461.91],[1672807680000, 317.25],[1672835760000, 79.77],[1672863840000, 159.38],[1672891920000, 467.47],[1672920000000, 201.38],[1672948080000, 123.93],[1672976160000, 387.1],[1673004240000, 415.54],[1673032320000, 209.12],[1673060400000, 841.52],[1673088480000, 178.45],[1673116560000, 326.57],[1673144640000, 74.71],[1673172720000, 179.36],[1673200800000, 80.32],[1673228880000, 32.96],[1673256960000, 70.57],[1673285040000, 121.21],[1673313120000, 307.06],[1673341200000, 56.41],[1673369280000, 354.73],[1673397360000, 478.77],[1673425440000, 29.8],[1673453520000, 144.97],[1673481600000, 80.24],[1673509680000, 206.37],[1673537760000, 16.47],[1673565840000, 202.3],[1673593920000, 176.71],[1673622000000, 167.3],[1673650080000, 646.22],[1673678160000, 241.8],[1673706240000, 475.54],[1673734320000, 81.4],[1673762400000, 382.01],[1673790480000, 640.17],[1673818560000, 348.95],[1673846640000, 637.43],[1673874720000, 434.96],[1673902800000, 785.31],[1673930880000, 6.7],[1673958960000, 87.62],[1673987040000, 413.71],[1674015120000, 224.36],[1674043200000, 1.78],[1674071280000, 233.85],[1674099360000, 16.9],[1674127440000, 42.16],[1674155520000, 215.39],[1674183600000, 404.52],[1674211680000, 109.09],[1674239760000, 132.11],[1674267840000, 16.94],[1674295920000, 254.22],[1674324000000, 326.11],[1674352080000, 40.16],[1674380160000, 226.48],[1674408240000, 270.99],[1674436320000, 310.3],[1674464400000, 389.93],[1674492480000, 47.68],[1674520560000, 577.58],[1674548640000, 267.41],[1674576720000, 213.77],[1674604800000, 196.79],      [1674632880000, 908.09],[1674660960000, 259.52],[1674689040000, 528.18],[1674717120000, 61.93],[1674745200000, 171.58],[1674773280000, 250.25],[1674801360000, 278.03],[1674829440000, 25.77],[1674857520000, 99.56],[1674885600000, 177.44],[1674913680000, 9.4],[1674941760000, 0.45],[1674969840000, 21.26],[1674997920000, 560.39],[1675026000000, 251.11],[1675054080000, 323.01],[1675082160000, 213.47],[1675110240000, 859.06],[1675138320000, 41.93],[1675166400000, 0.44],[1675194480000, 580.03],[1675222560000, 690.17],[1675250640000, 43.01],[1675278720000, 554.74],[1675306800000, 147.79],[1675334880000, 413.89],[1675362960000, 78.03],[1675391040000, 116.87],[1675419120000, 33.72],[1675447200000, 125.26],[1675475280000, 110.33],[1675503360000, 174.34],[1675531440000, 719.17],[1675559520000, 210.21],[1675587600000, 6.84],[1675615680000, 496.2],[1675643760000, 511.79],[1675671840000, 120.9],[1675699920000, 277.8],[1675728000000, 126.66],[1675756080000, 114.58],[1675784160000, 426.26],[1675812240000, 10.7],[1675840320000, 635.76],[1675868400000, 26.21],[1675896480000, 55.95],[1675924560000, 99.51],[1675952640000, 521.04],[1675980720000, 191.46],[1676008800000, 156.03],[1676036880000, 106.39],[1676064960000, 475.42],[1676093040000, 563.11],[1676121120000, 291.11],[1676149200000, 111.65],[1676177280000, 353.68],[1676205360000, 698.01],[1676233440000, 215.93],[1676261520000, 153.72],[1676289600000, 52.31],[1676317680000, 69.82],[1676345760000, 313.99],[1676373840000, 510.72],[1676401920000, 819.09],[1676430000000, 219.82],[1676458080000, 330.17],[1676486160000, 276.96],[1676514240000, 65.51],[1676542320000, 534.63],[1676570400000, 71.42],[1676598480000, 801.75],[1676626560000, 39.13],[1676654640000, 62.89],[1676682720000, 202.58],[1676710800000, 5.78],      [1676738880000, 346.31],[1676766960000, 336.35],[1676795040000, 184.31],[1676823120000, 758.68],[1676851200000, 96.5],[1676879280000, 13.69],[1676907360000, 42.9],[1676935440000, 33.17],[1676963520000, 456.91],[1676991600000, 728.52],[1677019680000, 138.78],[1677047760000, 32.71],[1677075840000, 370.24],[1677103920000, 405.97],[1677132000000, 472.35],[1677160080000, 376.17],[1677188160000, 142.8],[1677216240000, 488.2],[1677244320000, 114.22],[1677272400000, 8.94],[1677300480000, 49.42],[1677328560000, 36.19],[1677356640000, 174.22],[1677384720000, 370.34],[1677412800000, 48.9],[1677440880000, 72.18],[1677468960000, 40.22],[1677497040000, 107.77],[1677525120000, 687.75],[1677553200000, 580.86],[1677581280000, 112.93],[1677609360000, 275.9],[1677637440000, 87.35],[1677665520000, 41.66],[1677693600000, 420.79],[1677721680000, 49.49],[1677749760000, 65.46],[1677777840000, 9.44],[1677805920000, 606.82],[1677834000000, 144.33],[1677862080000, 32.41],[1677890160000, 329.64],[1677918240000, 430.6],[1677946320000, 33.45],[1677974400000, 244.68],[1678002480000, 548.82],[1678030560000, 433.98],[1678058640000, 103.91],[1678086720000, 52.46],[1678114800000, 47.22],[1678142880000, 330.65],[1678170960000, 175.02],[1678199040000, 302.15],[1678227120000, 158.18],[1678255200000, 3.43],[1678283280000, 52.78],[1678311360000, 236.4],[1678339440000, 374.72],[1678367520000, 415.45],[1678395600000, 144.66],[1678423680000, 725.16],[1678451760000, 515.48],[1678479840000, 71.91],[1678507920000, 0.99],[1678536000000, 219.35],[1678564080000, 64.8],[1678592160000, 292.89],[1678620240000, 158.95],[1678648320000, 0.36],[1678676400000, 430.61],[1678704480000, 874.64],[1678732560000, 60.79],[1678760640000, 4.06],[1678788720000, 308.87],[1678816800000, 167.34],[1678844880000, 279.1]
    ];
    const SERIES_NAME__APROVADAS = 'serie-name-aprovadas';
    const SERIES_DATA__NEGADAS = [
      [1672531200000, 1.374],[1672552800000, 7.963],[1672574400000, 9.794],[1672617600000, 5.198],[1672639200000, 8.496],[1672667280000, 5.928],[1672695360000, 2.368],[1672723440000, 6.258],[1672751520000, 0.699],[1672779600000, 6.494],[1672807680000, 4.007],[1672835760000, 6.231],[1672863840000, 1.977],[1672891920000, 7.894],[1672920000000, 4.22],[1672948080000, 3.653],[1672976160000, 6.848],[1673004240000, 9.813],[1673032320000, 7.499],[1673060400000, 9.143],[1673088480000, 3.933],[1673116560000, 7.788],[1673144640000, 8.596],[1673172720000, 8.67],[1673200800000, 5.012],[1673228880000, 2.714],[1673256960000, 2.532],[1673285040000, 5.124],[1673313120000, 6.061],[1673341200000, 3.342],[1673369280000, 8.381],[1673397360000, 5.204],[1673425440000, 2.709],[1673453520000, 3.52],[1673481600000, 1.021],[1673509680000, 8.254],[1673537760000, 0.901],[1673565840000, 7.223],[1673593920000, 9.173],[1673622000000, 3.988],[1673650080000, 8.108],[1673678160000, 2.534],[1673706240000, 7.186],[1673734320000, 3.584],[1673762400000, 6.108],[1673790480000, 9.817],[1673818560000, 3.499],[1673846640000, 8.996],[1673874720000, 5.778],[1673902800000, 9.927],[1673930880000, 0.346],[1673958960000, 4.49],[1673987040000, 4.902],[1674015120000, 4.632],[1674043200000, 0.1],[1674071280000, 3.273],[1674099360000, 5.515],[1674127440000, 5.032],[1674155520000, 4.578],[1674183600000, 5.202],[1674211680000, 1.22],[1674239760000, 3.218],[1674267840000, 1.435],[1674295920000, 9.253],[1674324000000, 3.845],[1674352080000, 6.852],[1674380160000, 2.672],[1674408240000, 5.843],[1674436320000, 7.791],[1674464400000, 4.432],[1674492480000, 4.228],[1674520560000, 7.701],[1674548640000, 4.985],[1674576720000, 7.605],[1674604800000, 4.376],[1674632880000, 9.246],[1674660960000, 6.484],      [1674689040000, 8.151],[1674717120000, 5.455],[1674745200000, 1.841],[1674773280000, 7.969],[1674801360000, 5.276],[1674829440000, 6.388],[1674857520000, 4.92],[1674885600000, 9.034],[1674913680000, 0.184],[1674941760000, 0.03],[1674969840000, 4.178],[1674997920000, 7.563],[1675026000000, 5.224],[1675054080000, 9.308],[1675082160000, 9.518],[1675110240000, 9.442],[1675138320000, 2.354],[1675166400000, 0.036],[1675194480000, 9.441],[1675222560000, 9.172],[1675250640000, 0.643],[1675278720000, 9.318],[1675306800000, 2.511],[1675334880000, 6.39],[1675362960000, 2.25],[1675391040000, 9.706],[1675419120000, 2.114],[1675447200000, 3.04],[1675475280000, 1.956],[1675503360000, 3.192],[1675531440000, 8.494],[1675559520000, 3.363],[1675587600000, 9.283],[1675615680000, 5.534],[1675643760000, 5.524],[1675671840000, 4.528],[1675699920000, 3.421],[1675728000000, 9.658],[1675756080000, 7.739],[1675784160000, 7.716],[1675812240000, 4.738],[1675840320000, 8.971],[1675868400000, 6.533],[1675896480000, 6.722],[1675924560000, 3.471],[1675952640000, 9.016],[1675980720000, 2.587],[1676008800000, 6.325],[1676036880000, 4.956],[1676064960000, 5.58],[1676093040000, 6.67],[1676121120000, 3.826],[1676149200000, 2.19],[1676177280000, 4.072],[1676205360000, 8.051],[1676233440000, 2.209],[1676261520000, 7.059],[1676289600000, 6.458],[1676317680000, 1.37],[1676345760000, 8.723],[1676373840000, 5.24],[1676401920000, 9.35],[1676430000000, 4.193],[1676458080000, 8.496],[1676486160000, 5.577],[1676514240000, 3.045],[1676542320000, 7.265],[1676570400000, 1.71],[1676598480000, 9.312],[1676626560000, 0.901],[1676654640000, 3.849],[1676682720000, 4.151],[1676710800000, 0.52],[1676738880000, 4.499],[1676766960000, 8.337],[1676795040000, 2.123],[1676823120000, 9.177],      [1676851200000, 1.083],[1676879280000, 0.307],[1676907360000, 1.134],[1676935440000, 6.33],[1676963520000, 7.996],[1676991600000, 8.493],[1677019680000, 4.839],[1677047760000, 1.869],[1677075840000, 8.563],[1677103920000, 8.714],[1677132000000, 9.935],[1677160080000, 4.813],[1677188160000, 1.945],[1677216240000, 9.863],[1677244320000, 6.136],[1677272400000, 7.287],[1677300480000, 0.76],[1677328560000, 0.547],[1677356640000, 3.466],[1677384720000, 4.53],[1677412800000, 0.558],[1677440880000, 9.174],[1677468960000, 1.309],[1677497040000, 1.11],[1677525120000, 8.063],[1677553200000, 6.542],[1677581280000, 6.887],[1677609360000, 3.884],[1677637440000, 1.188],[1677665520000, 7.809],[1677693600000, 4.456],[1677721680000, 6.206],[1677749760000, 1.339],[1677777840000, 7.225],[1677805920000, 6.684],[1677834000000, 3.001],[1677862080000, 6.546],[1677890160000, 4.044],[1677918240000, 7.654],[1677946320000, 0.999],[1677974400000, 3.462],[1678002480000, 5.725],[1678030560000, 8.84],[1678058640000, 8.229],[1678086720000, 3.221],[1678114800000, 1.203],[1678142880000, 7.586],[1678170960000, 3.513],[1678199040000, 6.992],[1678227120000, 4.243],[1678255200000, 0.628],[1678283280000, 0.976],[1678311360000, 2.503],[1678339440000, 5.054],[1678367520000, 9.474],[1678395600000, 7.389],[1678423680000, 8.152],[1678451760000, 6.063],[1678479840000, 1.192],[1678507920000, 1.742],[1678536000000, 2.525],[1678564080000, 0.784],[1678592160000, 4.438],[1678620240000, 2.668],[1678648320000, 0.192],[1678676400000, 5.773],[1678704480000, 9.546],[1678732560000, 2.185],[1678760640000, 1.263],[1678788720000, 8.122],[1678816800000, 2.455],[1678844880000, 3.522]
    ];
    const SERIES_NAME__NEGADAS = 'serie-name-negadas';


    console.log(SERIES_DATA__NEGADAS.length)
    //
    // DO_NOT_TOUCH__CHART_WIDTH
    //
    // era pra preencher 100% do comprimento, mas nao funciona! arrumei no css
    // #TALVEZ tirar o "diplay: flex", ja que, supostamente, o grafico sabe preencher tudo..
    // const DO_NOT_TOUCH__CHART_WIDTH = '100%';
    //
    // DO_NOT_TOUCH__CHART_FORECAST
    //
    // pontilha o final da serie ... tipo "previsao", talvez seja legal com dados da api
    const DO_NOT_TOUCH__CHART_FORECAST: ApexForecastDataPoints = {
      count: SERIES_DATA__APROVADAS.length * 0.05,
      fillOpacity: 0.5,
      strokeWidth: 1,
      dashArray: 25
    };
    //
    // DO_NOT_TOUCH__CHART_XAXIS__MAIN
    //
    const DO_NOT_TOUCH__CHART_XAXIS__MAIN: ApexXAxis = {
      max: SERIES_DATA__APROVADAS[SERIES_DATA__APROVADAS.length - 1][0],
      min: SERIES_DATA__APROVADAS[0][0],
      type: 'datetime',
      tickAmount: 3
    };
    const DO_NOT_TOUCH__CHART_XAXIS__BRUSH: ApexXAxis = {
      max: SERIES_DATA__APROVADAS[SERIES_DATA__APROVADAS.length - 1][0],
      min: SERIES_DATA__APROVADAS[0][0],
      tooltip: {
        enabled: false
      },
      type: 'datetime',
    };
    //
    // DO_NOT_TOUCH__CHART_YAXIS_OPPOSITE
    //
    // as configuracoes dos eixos Y devem "corresponder" nos graficos main e brush
    const DO_NOT_TOUCH__CHART_YAXIS_OPPOSITE: ApexYAxis[] = [{
      axisBorder: { show: true, color: '#FFFFFF30' }, // liga/desliga borda externa do eixo comeco/fim do grafico
      axisTicks: {
        show: false // liga/desliga tracinhos laterais do eixo .. feio, tira!
      }, 
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: COLOR_GREEN
        }
      },
      tickAmount: 6,
      title: {
        text: 'Y APROVADAS',
        style: {
          color: COLOR_GREEN
        }
      }
    }, {
      axisBorder: { show: true, color: '#FFFFFF30' }, // liga/desliga borda externa do eixo comeco/fim do grafico
      axisTicks: { show: false }, // liga/desliga tracinhos laterais do eixo .. feio, tira!
      decimalsInFloat: 0,
      labels: {
        style: {
          colors: COLOR_RED
        }
      },
      opposite: true, // vai do outro lado
      title: {
        text: 'Y NEGADAS',
        style: {
          color: COLOR_RED
        }
      }
    }];
    //
    // CHART_GLOBAL_FONT_FAMILY
    //
    // padrao css, so' lembrar de adicionar fontFamily e tudo que ficar fora do padrao, nao achei o fontFamily global
    const CHART_GLOBAL_FONT_FAMILY = 'Source Code Pro, monospace';
    //
    // CHART_GLOBAL_FORECOLOR
    //
    // cor padrao da fonte do grafico, se nao personalizar outras fica tudo da mesma cor
    const CHART_GLOBAL_FORECOLOR = '#fff';
    //
    // CHART_GLOBAL_CHART_HEIGHT
    //
    // altura SEMPRE 100%, pra preencher o elemento html por inteiro, so' css da ruim
    const CHART_GLOBAL_CHART_HEIGHT = '100%';
    const CHART_GLOBAL_TITLE_FONT_SIZE = '16px';

    this.chartOptions = {
      // anotacoes/linhas que cruzam o grafico pelos dois eixos
      annotations: {
        yaxis: [{
          borderColor: '#f00',
          fillColor: '#f00',
          label: {
            borderWidth: 0,
            borderRadius: 0,
            style: {
              background: '#FF1744',
              color: '#fff',
            },
            text: `APROVADAS abaixo de ${NEGADAS_MAX}`,
            textAnchor: 'end'
          },
          opacity: 0.1,
          strokeDashArray: 5,
          y: 0,
          y2: NEGADAS_MAX,
        },{
          borderColor: '#00BFA5',
          label: {
            borderWidth: 0,
            borderRadius: 0,
            style: {
              background: '#00BFA5',
              color: '#fff',
            },
            text: 'APROVADAS acima de 820',
            textAnchor: 'end'
          },
          y: 820
        }],
        xaxis: [{
          borderColor: '#999',
          fillColor: '#775DD0',
          opacity: 0.1,
          label: {
            textAnchor: 'start',
            borderWidth: 0,
            borderRadius: 0,
            orientation: 'horizontal',
            style: {
              background: '#775DD0',
              color: "#fff",
            },
            text: 'METADE',
          },
          strokeDashArray: 1,
          x: SERIES_DATA__NEGADAS[(SERIES_DATA__NEGADAS.length/2) - 5][0],
          x2: SERIES_DATA__NEGADAS[(SERIES_DATA__NEGADAS.length/2) + 5][0],
        }],
      },
      chart: {
        fontFamily: CHART_GLOBAL_FONT_FAMILY,
        foreColor: CHART_GLOBAL_FORECOLOR,
        height: CHART_GLOBAL_CHART_HEIGHT,
        id: ID_CHART_MAIN,
        toolbar: {
          autoSelected: 'zoom',
          show: true
        },
        type: 'area',
        zoom: {
          enabled: true,
          autoScaleYaxis: false,
          type: 'x',
          zoomedArea: {
            fill: {
              color: '#f00',
              opacity: 0.4
            },
            stroke: {
              color: '#00f',
              opacity: 0.4,
              width: 1
            }
          }
        }
      },
      colors: [
        COLOR_GREEN, // #1'aprovadas
        COLOR_RED, // #2'negadas
        COLOR_YELLOW, // #3'desfeitas
      ],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [ 1 ],
        formatter: (val: number, { seriesIndex, dataPointIndex, w }): string => {
          return val > 3 ? `${val}` : ''
        },
        style: {
          fontSize: '8px',
          fontFamily: 'Source Code Pro, monospace',
          fontWeight: '100',
          colors: [(options: any) => {
            return options.seriesIndex === 1 ? 'red' : 'blue'
          }]
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 1,
          borderRadius: 0,
          borderWidth: 0,
          opacity: 0.5,
          dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 1,
            color: '#000',
            opacity: 1
          }
        }
      },
      forecastDataPoints: DO_NOT_TOUCH__CHART_FORECAST,
      legend: { show: false },
      markers: {
        size: 0,
        shape: 'square',
        strokeWidth: 10,
        discrete: [{
          seriesIndex: 0,
          dataPointIndex: (SERIES_DATA__APROVADAS.length/2)-1,
          fillColor: '#FFF',
          strokeColor: '#0FF',
          size: 10,
          shape: 'square' // "circle" | "square" | "rect"
        }, {
          seriesIndex: 2,
          dataPointIndex: (SERIES_DATA__APROVADAS.length/2)+1,
          fillColor: '#f7f4f3',
          strokeColor: '#eee',
          size: 4,
          shape: 'circle' // "circle" | "square" | "rect"
        }]
      },
      series: [{
        data: SERIES_DATA__APROVADAS,
        name: SERIES_NAME__APROVADAS,
        type: 'area'
      }, {
        data: SERIES_DATA__NEGADAS,
        name: SERIES_NAME__NEGADAS,
      }],
      stroke: {
        colors: [
          COLOR_GREEN,
          COLOR_RED,
          COLOR_YELLOW,
        ],
        curve: 'smooth',
        lineCap: 'butt',
        width: [5, 2]
      },
      title: {
        align: 'center',
        floating: true, // cola o grafico no titulo
        text: 'TRANSAÇÕES',
        style: {
          fontFamily: CHART_GLOBAL_FONT_FAMILY,
          fontSize: CHART_GLOBAL_TITLE_FONT_SIZE,
          fontWeight: 'bold'
        }
      },
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: true,
        custom: [function({ series, seriesIndex, dataPointIndex, w }) {
          return `
          <div class="custom-tooltip">
            <div>
              <span class="neg">${w.globals.seriesNames[1].substring(w.globals.seriesNames[1].lastIndexOf('-') + 1)}</span>
              <span>${series[1][dataPointIndex].toFixed(2)}</span>
            </div>
            <div>
              <span class="apr">${w.globals.seriesNames[0].substring(w.globals.seriesNames[0].lastIndexOf('-') + 1)}</span>
              <span>${series[0][dataPointIndex].toFixed(2)}</span>
            </div>
          </div>
          `;
        },
        function({ series, seriesIndex, dataPointIndex, w }) {
          return `
            <div class="custom-tooltip">
              <div>
                <span class="neg">${w.globals.seriesNames[1].substring(w.globals.seriesNames[1].lastIndexOf('-') + 1)}</span>
                <span>${series[1][dataPointIndex].toFixed(2)}</span>
              </div>
              <div>
                <span class="apr">${w.globals.seriesNames[0].substring(w.globals.seriesNames[0].lastIndexOf('-') + 1)}</span>
                <span>${series[0][dataPointIndex].toFixed(2)}</span>
              </div>
            </div>
          `;
        }],
        fillSeriesColor: false,
        x: {
          show: true, // apagar o header do tooltip
          format: 'yyyy-MM-dd HH:mm:ss',
        },
        y: {
          title: {
            // SERIES_NAME__APROVADAS/SERIES_NAME__NEGADAS
            formatter: (seriesName) => seriesName.substring(seriesName.lastIndexOf('-') + 1).substring(0, 3),
          },
        },
        marker: {
          show: true
        }
      },
      xaxis: DO_NOT_TOUCH__CHART_XAXIS__MAIN,
      yaxis: DO_NOT_TOUCH__CHART_YAXIS_OPPOSITE
    };

    this.chartOptionsBrush = {
      chart: {
        brush:{
          enabled: true,
          target: ID_CHART_MAIN,
          autoScaleYaxis: true
        },
        fontFamily: CHART_GLOBAL_FONT_FAMILY,
        foreColor: CHART_GLOBAL_FORECOLOR,
        height: CHART_GLOBAL_CHART_HEIGHT,
        id: ID_CHART_BRUSH,
        selection: {
          enabled: true,
          type: 'x',
          fill: {
            color: '#76FF03',
            opacity: 0.1
          },
          stroke: {
            width: 2,
            dashArray: 3,
            color: '#00C853',
            opacity: 0.4
          },
          xaxis: {
            min: SERIES_DATA__APROVADAS[SERIES_DATA__APROVADAS.length/2 - 15][0],
            max: SERIES_DATA__APROVADAS[SERIES_DATA__APROVADAS.length/2 + 15][0]
          }
        },
        type: 'area',

      },
      colors: [
        COLOR_GREEN, // #1'aprovadas
        COLOR_RED, // #2'negadas
        COLOR_YELLOW, // #3'desfeitas
      ],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        }
      },
      forecastDataPoints: DO_NOT_TOUCH__CHART_FORECAST,
      series: [{
        name: SERIES_NAME__APROVADAS,
        data: SERIES_DATA__APROVADAS,
        type: 'area'
      }, {
        name: SERIES_NAME__NEGADAS,
        data: SERIES_DATA__NEGADAS
      }],
      xaxis: DO_NOT_TOUCH__CHART_XAXIS__BRUSH,
      yaxis: [{
        decimalsInFloat: 0,
        labels: {
          style: {
            colors: COLOR_GREEN
          }
        },
        tickAmount: 2,
        title: {
          text: 'Y APROVADAS',
          style: {
            color: COLOR_GREEN
          }
        }
      },{
        decimalsInFloat: 0,
        labels: {
          style: {
            colors: COLOR_RED
          }
        },
        opposite: true,
        tickAmount: 2,
        title: {
          text: 'Y NEGADAS',
          style: {
            color: COLOR_RED
          }
        }
      }]
    };
  }
}
