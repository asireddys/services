import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  constructor(private http:HttpClient) { }
  getshow(){
    return this.http.get("https://api.myjson.com/bins/boty4");
  }
  getuser1(){
    return this.http.get("https://api.myjson.com/bins/g1anw");
  }
}
