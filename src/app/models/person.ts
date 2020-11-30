export class Person {
    nid_persona:number=0;
    nom_persona?:string="";
    ape_pate_persona:string="";
    ape_mate_persona:string="";
    nid_grado:number=0;
    grado:string="";
    nivel:string="";
    fecha_naci:Date;
    foto_ruta:string;
    edad:string;
    files:Array<File>=[]
}