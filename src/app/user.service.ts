import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUser(){
    // const user = this.http.get("https://api.github.com/users")
    const user = this.http.get("http://localhost:8080/course/courseList")
    return user
  }
}
