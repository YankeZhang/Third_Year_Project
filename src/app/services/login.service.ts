import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(user){
    
    return this.http.post('http://51.140.28.157:4600/login', user);

}

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  register(form:any){
    
    return this.http.post('http://51.140.28.157:4600/register', form);
  }
}
