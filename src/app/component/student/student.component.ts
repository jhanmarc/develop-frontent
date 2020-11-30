import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentNewComponent } from '../student-new/student-new.component';

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
  listFirter:Array<Person> = [];
  
  ngOnInit(): void {
    this.getStudents()
  }

  openNewStudent() {
    const dialogRef = this.dialog.open(StudentNewComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getStudents()
    });
  }

  getStudents(){
    this.personServices.getPersons().subscribe(data => { this.listStudents = data['data'], 
        this.listStudents.forEach((e:Person)=> {
          const sd = this.utils.getEdad(e.fecha_naci)
          e.edad = sd;
          
        });
        this.listFirter = this.listStudents;
    })
    
  }

  search(term: string) {
    if (term) {
      this.listFirter = this.listStudents.filter((x) => this.evaluate(x, term));
    } else if(this.listFirter.length == 0){
        this.getStudents()
    }
    else {
      this.getStudents()
    }
  }

  private evaluate(x, term) {
    console.log();
    if (!x.nom_persona) {
      x.nom_persona = "";
    }
    return x.nom_persona
      .trim()
      .toLowerCase()
      .includes(term.trim().toLowerCase());
  }


}
