import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentManagement';
  studentData:any;
  constructor(private students:StudentService){
  }

}
