import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-show-student',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './show-student.component.html',
  styleUrl: './show-student.component.css'
})
export class ShowStudentComponent {

  studentData:any;
  succesMessage:any;

  constructor(private studentservice:StudentService){
    this.showAllStudents();
  }

  showAllStudents(){
    this.studentservice.getAllStudent().subscribe((data)=>{
      console.log(data);
      this.studentData = data;
      
    })
  }

  deleteStudent(id:string){
    this.studentservice.deleteStudent(id).subscribe((data)=>{
      console.log(data); 
      if(data){
        this.succesMessage = 'Student Deleted Successfully';
        this.showAllStudents();
      }     
    })
  }

  

}
