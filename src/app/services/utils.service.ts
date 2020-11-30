import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public get getHeaders(){
    return this.getHeader()
  }

  public getEdad(fecha_naci:Date){
    return this.getYers(fecha_naci);
  }

  private getHeader(){
    const header = { 'Content-Type': 'application/json', 'Accept': 'application/json'}
    const headers = new HttpHeaders(header);
    return headers;
  }

  private getYers(fecha_naci:Date){
    let fecha = new Date(fecha_naci);
    let dia = fecha.getDate(), mes = fecha.getMonth() + 1, year = fecha.getFullYear();
    let fecha_hoy = new Date(), ahora_year = fecha_hoy.getFullYear(), ahora_mes = fecha_hoy.getMonth() + 1, ahora_dia = fecha_hoy.getDate();

    let edad = ahora_year -year;
    if (ahora_mes < mes){
      edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)){
      edad--;
    } 
    
    if(ahora_year < year){
      return "Aún no naces :)"
    }

    // calculamos los meses
    var meses = 0;

    if (ahora_mes > mes && dia > ahora_dia)
        meses = ahora_mes - mes - 1;
    else if (ahora_mes > mes)
        meses = ahora_mes - mes
    if (ahora_mes < mes && dia < ahora_dia)
        meses = 12 - (mes - ahora_mes);
    else if (ahora_mes < mes)
        meses = 12 - (mes - ahora_mes + 1);
    if (ahora_mes == mes && dia > ahora_dia)
        meses = 11;

    let edd = edad + " año(s) " + meses + " mese(s)"
    return edd;
  }
}
