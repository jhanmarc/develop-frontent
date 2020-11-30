import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentNewComponent } from '../../component/student-new/student-new.component';

// servicios
import { PersonService } from '../../services/person.service';
import { UtilsService } from '../../services/utils.service';

//models
import { Person } from '../../models/person';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public dialog: MatDialog, private personServices:PersonService, private utils: UtilsService ) { 
    this.urlStatic = environment.urlStatic;
    // this.student = new Person;
  }

  urlStatic:string;
  // student:Person;
  listStudents:Array<Person> = [];

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
    this.getStudents()
  }

  openNewStudent() {
    const dialogRef = this.dialog.open(StudentNewComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getStudents(){
    this.personServices.getPersons().subscribe(data => { this.listStudents = data['data'], 
        this.listStudents.forEach((e:Person)=> {
          const sd = this.utils.getEdad(e.fecha_naci)
          e.edad = sd;
        });
    })
  }


}
