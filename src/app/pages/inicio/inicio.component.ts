import { Component, inject, OnInit } from '@angular/core';

import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  firestore: Firestore = inject( Firestore );


  juegos: any[] = [];



  ngOnInit(): void {
    const itemCollection = collection(this.firestore, 'goty');

    collectionData( itemCollection ).pipe(
      map( (resp ) => {
        resp as Game[];
        return resp.map( ({name, votos}) => ({name, value: votos}) )
      })

    ).subscribe( juegos => {
      this.juegos = juegos;
      });

  }

}
