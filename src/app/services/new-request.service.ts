import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewRequestService {

  constructor(private http:HttpClient) { }
  submitForm(form:any){
    this.http.post('http://51.105.27.186:4600/forms/stickyheader/', form).subscribe(next => {
      console.log(form)
    });
  }
}
