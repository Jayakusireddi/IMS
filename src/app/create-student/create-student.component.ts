import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
          pincode:new FormControl(null, [Validators.min(100000),Validators.max(999999)]),
        }
      ),
      company:new FormControl(
        {
          name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10)]),
          location:new FormControl(),
          pacakge:new FormControl(null,[Validators.min(100000),Validators.max(999999)]),
          offerDate:new FormControl()
        }
      ),
      education:new FormArray([]),
      sourceType:new FormControl(),
      sourceForm:new FormControl(),
      referalName:new FormControl()
    }
  )
  get educationsFormArray(){
    return this.studentForm.get('educations')as FormArray;
  }
  add(){
    this.educationsFormArray.push(
      new FormGroup(
        {
          qualification:new FormControl(),
          year:new FormControl(),
          percentage:new FormControl()
        }
      )

    )
  }
  delete(i:number){
    this.educationsFormArray.removeAt(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.studentForm);
    this.studentForm.markAllAsTouched();
  }

}
