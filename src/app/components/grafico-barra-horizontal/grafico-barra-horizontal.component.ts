import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'component-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{


  @Input() results: any[] = [];


  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];

  view: [number, number] = [ window.innerWidth/1.35, 400];

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'

  // intervalo: any;

  constructor(){


    // this.intervalo =  setInterval( () => {

    //   console.log('tick');
    //   const newResults = [...this.results];

    //   for( let i in newResults ){
    //     newResults[i].value = Math.round( Math.random() * 500 );
    //   }

    //   this.results = [...newResults];
    // }, 3000);

  }


  onSelect(event:any) {
    console.log(event);
  }


  ngOnDestroy(): void {
    // clearInterval( this.intervalo );
  }

}
