import { Component, OnInit, inject } from '@angular/core';

import { Game } from 'src/app/interfaces/game.interface';

import { GameService } from '../../services/game.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit{

  private gameService = inject( GameService );

  juegos: Game[] = [];



  ngOnInit(): void {
    this.getNominados();
  }


  getNominados(){
    return this.gameService.getNominados()
      .subscribe( juegos => {
        this.juegos = juegos;
        console.log( juegos );
    });
  }


  votarJuego( juego: Game ){

    Swal.fire({
      background: '#1C1C1C',
      icon: 'question',
      title: 'Confirmar Votación',
      text: `¿Estas seguro que deseas votar por ${ juego.name }?`,
      color: '#E5E5E5',
      showCancelButton: true,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Si, Votar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#00CEBF',
      cancelButtonColor: '#E3110A',
    }).then( (result) => {
      if( result.isDenied || result.isDismissed ) return;
      this.gameService.votarJuego( juego.id )
        .subscribe( (resp:any) => {

          if( resp.ok ){
            Swal.fire({
              background: '#1C1C1C',
              color: '#E5E5E5',
              icon: 'success',
              title: 'Gracias',
              text: `Tu votación por ${ juego.name } ha sido registrado` ,
              confirmButtonColor: '#00CEBF',
            })
          }else{
            Swal.fire('Error', resp.msg, 'error')
          }
        });
    })
  }

}
