import { Component, OnInit } from '@angular/core';
import {EquipoService} from "../equipo.service";

@Component({
  selector: 'app-contenido-a',
  templateUrl: './contenido-a.component.html',
  styleUrls: ['./contenido-a.component.css']
})
export class ContenidoAComponent implements OnInit {
  equipo1:any[]=[];

  constructor(private _servicio:EquipoService) {
    this.equipo1=_servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
