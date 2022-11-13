import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  public students:any = [];
  public term:string = "";

  public column: string="";
  public order: string="";

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

  pagination(page:number){
    this._studentService.getPagedStudents(page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  sort(){
    this._studentService.getSortedStudents(this.column, this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal server error')
      }
    )
  }

  filter(){
    this._studentService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
