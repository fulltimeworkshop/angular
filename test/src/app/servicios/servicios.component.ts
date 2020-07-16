import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicio : Servicio={
    id:1,
    name:"Peliculas"
  }
   
  constructor() { }

  ngOnInit(): void {
  }

}
