import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) {}

  createStudent(data:any):Observable<any>{
    return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data);
  }

  getStudents():Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students")
  }
   
}
