import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  cursos:string[]=['html','angular','php'];
  animales:Array<any>=[
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Mario',edad:3},
    {tipo:'Loro',nombre:'Fer',edad:2}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
