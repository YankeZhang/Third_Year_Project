import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http:HttpClient) { }

  getDatawithPara(username: string):Observable<Object>{
    return this.http.get('http://51.11.129.83:4600/dashboard/pdf/'+username);
  }

  requestPdfData(form:any){ 
    return this.http.post('http://51.11.129.83:4600/dashboard/pdfdata', form);
  }
}
