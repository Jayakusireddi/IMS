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

  getPagedStudents(page:number):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=15&page=1"+page);
  }

  getSortedStudents(column:string,order:string):Observable<any>{
    return this._httpClient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy='+column+'&order='+order);
  }

  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+term);
  }



   
}
