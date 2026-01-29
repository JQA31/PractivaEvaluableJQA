import { NonCapturingGroup } from './../../../../node_modules/regjsparser/parser.d';
import { Component, OnInit } from '@angular/core';
import { VecinoService } from 'src/app/Services/vecino.service';

@Component({
  selector: 'app-vecino-list',
  templateUrl: './vecino-list.component.html',
  styleUrls: ['./vecino-list.component.css']
})
export class VecinoListComponent implements OnInit{

  id: number = 0;
  nombre: string = "";
  piso: string = "";
  deuda: number = 0;

  listaVecinos: Array<any> = [];

  constructor(private servicioVecino: VecinoService){}

  ngOnInit(): void {
    this.listaVecinos = this.servicioVecino.listarVecinos();
  }

  anadirVecino(){
    this.servicioVecino.anadirVecino(this.nombre,this.piso,this.deuda);
    this.limpiarFormulario();
  }

  eliminarVecino(id: number){
    this.servicioVecino.eliminarVecino(id);
    this.limpiarFormulario();
  }

  prepararModificar(id:number,nombre:string,piso:string,deuda:number){
    this.id = id;
    this.nombre = nombre;
    this.piso = piso;
    this.deuda = deuda;
  }

  modificarVecino(){
    this.servicioVecino.actualizarVecino(this.id,this.nombre,this.piso,this.deuda);
    this.limpiarFormulario();
  }

  limpiarFormulario(){
    this.id = 0;
    this.nombre = "";
    this.deuda = 0;
    this.piso = "";
  }

}
