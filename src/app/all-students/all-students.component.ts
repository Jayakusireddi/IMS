import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  public students:any = [];

  constructor(private _studentService:StudentService) {
    this._studentService.getStudents().subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
   }

  ngOnInit(): void {
  }

}
