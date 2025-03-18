import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  saveStudent(data:any){
    return this.http.post("http://127.0.0.1:8000/api/addStudents",data);
  }

  getAllStudent(){
    return this.http.get("http://127.0.0.1:8000/api/showAllStudent");
  }

  deleteStudent(id:any){
    return this.http.delete("http://127.0.0.1:8000/api/students/"+id);
  }

  updateStudent(id:any,data:any){
    return this.http.put("http://127.0.0.1:8000/api/edit/"+id,data);
  }

  getSingleStudentRecord(id:any){
    return this.http.get("http://127.0.0.1:8000/api/getsinglestudent/"+id)
  }

}

