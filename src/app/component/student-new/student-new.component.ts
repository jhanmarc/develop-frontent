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
    this.student = new Person;
  }

  listGrados:Array<Grado> = [];
  student:Person;
  public filesToUplad: Array<File>;
  valid:Boolean=true;
  close:Boolean=false;
  
  

  ngOnInit(): void {
    this.getGrados();
  }


  private getGrados(){
    this.gradoService.getGrados().subscribe(data => { this.listGrados = data['data']});
  }

  ChangeImage(fileInput: any) {
    this.filesToUplad = <Array<File>>fileInput.target.files;
    this.student.files = this.filesToUplad;
  }
  
  changeEdad(date:any){
    this.student.edad = this.utils.getEdad(new Date(date.target.value))
  }

  newStudent(){
    // console.log(this.student);
    this.valid = false;
    this.personService.crearPerson(this.student).then(resp => {
      if(resp){
        if(resp['status']){
          this.valid = true;
          this.close = true
        }else{
          this.valid = true;
        }
      }
    })
  }

}
