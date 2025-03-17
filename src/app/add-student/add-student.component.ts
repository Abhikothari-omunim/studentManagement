import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-student',
  imports: [FormsModule , RouterLink],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  bookValue : any;

  constructor(private student:StudentService){
    
  }
  successMessage:any;
  addStudent(data:any){
    // console.warn(data)
    this.student.saveStudent(data).subscribe((result)=>{
      console.log(result);
      if(result){
        this.successMessage = "Student Added SuccessFully.....";
      }
    })
  }
}
