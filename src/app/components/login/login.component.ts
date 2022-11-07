import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup= new FormGroup(
    {
      email:new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null, [Validators.required, Validators.minLength(8),Validators.maxLength(12)])

    }
  )

  constructor(private _loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){

    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        sessionStorage.setItem("IMS-token",data.token);
        this.router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Invalid credentials");
      }
    )
  }
}

