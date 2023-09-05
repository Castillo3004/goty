import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/game.interface';
import { catchError, of, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class GameService {

  private http = inject( HttpClient );


  private juegos: Game[] = [];


  getNominados(){

    if( this.juegos.length > 0 ){
      console.log('Desde cache');
      return of( this.juegos );
    }else{
      console.log('Desde internet');
      return this.http.get<Game[]>(`${ environment.baseUrl }/goty`).pipe(
        tap( juegos => this.juegos = juegos )
      )
    }

  }

  votarJuego( id: string ){

    return this.http.post(`${ environment.baseUrl }/goty/${ id }`, {} ).pipe(
      catchError( err => of( err.error ))
    )

  }

}
