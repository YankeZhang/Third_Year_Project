import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) {}

  getAllRequests(): Observable<Object> {
    return this.http.get('http://51.11.129.83:4600/components/calendar')
  }
}
