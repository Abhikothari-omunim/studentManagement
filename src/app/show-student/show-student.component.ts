import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // <-- Add this import

@Component({
  selector: 'app-show-student',
  imports: [RouterLink, RouterOutlet, FormsModule , CommonModule],
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent {

  studentData: any;
  succesMessage: any;
  getsinglestudentRecord: any;
  showForm: boolean = false; 

  constructor(private studentservice: StudentService) {
    this.showAllStudents();
  }

  showAllStudents() {
    this.studentservice.getAllStudent().subscribe((data) => {
      console.log(data);
      this.studentData = data;
    });
  }

  deleteStudent(id: string) {
    this.studentservice.deleteStudent(id).subscribe((data) => {
      console.log(data);
      if (data) {
        this.succesMessage = 'Student Deleted Successfully';
        this.showAllStudents();
      }
    });
  }

  selectStudent(id: any) {
    this.studentservice.getSingleStudentRecord(id).subscribe((data: any) => {
      console.log(data);
      this.getsinglestudentRecord = data;
      this.showForm = true; // Show the update form when a student is selected
    });
  }

  updateStudent(id: any, data: any) {
    this.studentservice.updateStudent(id, data).subscribe((data) => {
      this.showAllStudents();
      this.showForm = false; // Hide the form after updating the student
    });
  }
}
