import { Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

export const routes: Routes = [
    {path:'addStudent',component:AddStudentComponent},
    {path:'showAllStudents',component:ShowStudentComponent},
    { path: 'updateStudent/:id', component: UpdateStudentComponent }

];
