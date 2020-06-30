import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[]=[
    {
      nombre:"ejemplo",
      especialidad:'css',
      descripcion:'algun texto descriptivo'
    },
    {
      nombre:"ejemploDos",
      especialidad:'html',
      descripcion:'algun texto descriptivo'
    }
  ];

  constructor() {
    console.log('servicio activo')
   }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerDetalle(i){
    return this.equipo[i];
  }
}
