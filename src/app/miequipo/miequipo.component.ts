import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EquipoService} from "../equipo.service";

@Component({
  selector: 'app-miequipo',
  templateUrl: './miequipo.component.html',
  styleUrls: ['./miequipo.component.css']
})
export class MiequipoComponent implements OnInit {
  detalleEquipo:any=[];

  constructor(
      private ruta:ActivatedRoute,
      private _servicio:EquipoService
    )
    {
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.detalleEquipo = this._servicio.obtenerDetalle(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
