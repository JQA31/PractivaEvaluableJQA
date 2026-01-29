import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VecinoService {

  id: number = 0;
  nombre: string = "";
  piso: string = "";
  deuda: number = 0;

  listaVecinos: Array<any> = [
    {
      id:1,
      nombre: "Samuel",
      piso: "2ºA",
      deuda: 0
    },
    {
      id:2,
      nombre: "Pablo",
      piso: "1°bajo",
      deuda: 1000
    }
  ];

  constructor() { }


  anadirVecino(nombre: string, piso: string, deuda: number){
    const nuevoVecino = {
      id: this.listaVecinos.length+1,
      nombre: nombre,
      piso: piso,
      deuda: deuda
    }
    this.listaVecinos.push(nuevoVecino);
  }

  obtenerVecino(id: number){
    return this.listaVecinos.find(v => v.id === id);
  }

  obtenerVecinoIndex(id: number){
    return this.listaVecinos.findIndex(v => v.id === id);
  }

  actualizarVecino(id: number, nombre: string, piso: string, deuda: number){
    const vecino = this.obtenerVecino(id);
    if(vecino){
      vecino.nombre = nombre;
      vecino.piso = piso;
      vecino.deuda = deuda;
    }
  }

  eliminarVecino(id:number){
    const index = this.obtenerVecinoIndex(id);
    this.listaVecinos.splice(index,1);
  }

  listarVecinos(){
    return this.listaVecinos;
  }

}
