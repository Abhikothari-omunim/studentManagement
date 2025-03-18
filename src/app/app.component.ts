import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentManagement';
  studentData:any;

  selectedData:any;
  constructor(private students:StudentService){
  }

}
