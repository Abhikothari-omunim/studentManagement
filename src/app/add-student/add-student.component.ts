import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';  // <-- Import Router for navigation

@Component({
  selector: 'app-add-student',
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'] 
})
export class AddStudentComponent {

  bookValue: any;
  successMessage: string = '';

  constructor(private student: StudentService, private router: Router) {}

  addStudent(data: any) {
    // Call the service to save the student
    this.student.saveStudent(data).subscribe(
      (result) => {
        if (result) {
          this.successMessage = 'Student Added Successfully!';
          this.router.navigate(['/showAllStudents']);  // Assuming your student list route is '/student-list'
          setTimeout(() => {
            this.successMessage = ''; // Hide the success message after 3 seconds
          }, 3000); // 3 seconds
        }
      },
      (error) => {
        console.error('Error:', error);
        this.successMessage = 'Failed to add student. Please try again later.';
      }
    );
  }
}
