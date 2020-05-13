import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private valid = true;
  constructor(private http:HttpClient) { }

  login(user){
    
    return this.http.post('http://51.11.129.83:4600/login', user);

}

  
  register(form:any){
    
    return this.http.post('http://51.11.129.83:4600/register', form);
  }


  
 
  loggedIn(){

    if(!!!localStorage.getItem('token')){
      return false
    }
    this.http.get('http://51.11.129.83:4600/token/'+localStorage.getItem('token')).pipe(map((data:any)=>{
      if(data==true){
        console.log("valid change to true")
        this.valid = true
        return
      }else{
        console.log("valid change to false")
        this.valid=false
        return
      }
    })).subscribe()
   return this.valid
}}
