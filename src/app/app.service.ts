import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  myMethod(data){
    const url = 'https://dtlrrbrtvg.execute-api.ap-southeast-1.amazonaws.com/dev';
    return this.http.post(url, data)
  }
}
