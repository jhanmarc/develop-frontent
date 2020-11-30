import { Component, OnInit } from '@angular/core';

// models
import { Person } from 'src/app/models/person';
import { Grado } from 'src/app/models/grado';

// services
import { GradoService } from 'src/app/services/grado.service';
import { PersonService } from '../../services/person.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: '..-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  constructor(private personService:PersonService, private utils: UtilsService, private gradoService:GradoService) { 
    // this.student = new Person;
  }

  listGrados:Array<Grado> = [];
  student = { 
    nom_persona:"",
    ape_pate_persona:"",
    ape_mate_persona:"",
    nid_grado:0,
    grado:"",
    nivel:"",
    fecha_naci:"",
    foto_ruta:"",
    edad:""
  };

  ngOnInit(): void {
    this.getGrados();
  }


  private getGrados(){
    this.gradoService.getGrados().subscribe(data => { this.listGrados = data['data']});
  }

  newStudent(){
    // console.log(this.student);
    // this.personService.crearPerson(data).subscribe(resp => {
    //   if(resp){
    //     // this.toastr.success('El usuario ha sido creado con éxito.');
    //     // this.getUsers()
    //   }
    // })
  }

}
