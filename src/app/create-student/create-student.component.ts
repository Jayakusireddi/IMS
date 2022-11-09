import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

   public studentForm:FormGroup= new FormGroup(
   {
      name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(12)]),
      gender:new FormControl(),
      mobile:new FormControl(null,[Validators.min(1000000000),Validators.maxLength(9999999999)]),
      email:new FormControl(),
      batch:new FormControl(),
      address:new FormGroup(
        {
          city:new FormControl(),
          mandal:new FormControl(),
          district:new FormControl(),
          state:new FormControl(),
          pincode:new FormControl()
        }
      )
    }
  )

  constructor() { }

  ngOnInit(): void {
  }

}
