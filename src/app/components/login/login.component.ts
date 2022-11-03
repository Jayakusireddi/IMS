import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login() {
throw new Error('Method not implemented.');
}

  public loginUserForm:FormGroup= new FormGroup(
    {
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8),Validators.maxLength(12)])

    }
  )

  constructor() { }

  ngOnInit(): void {
  }

  Login(){
    
  }
}

