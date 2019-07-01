import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentdetailsService {

  constructor(private http:HttpClient,private router: Router ) { }

 admin_url:any = "http://localhost:3000/Admin";
 mockurl:string = "http://localhost:500/emp"
student_url:string = "http://localhost:5000/students";

  getData(){
    return this.http.get(this.admin_url);
  }
  submit_studentData(formvalue){
   let {fname,email,password,gender,phone} = formvalue; 
   let data = {id:Date.now(),email,password,fname,gender,phone};
   return this.http.post(this.student_url, data
    
    );
  }

  mpost(val){
    return  this.http.post(this.mockurl,val);
  }
  getStudents(){
     return this.http.get(this.student_url)
     .subscribe((res)=>{
       console.log(res);
     })
  }
  authenticate(): boolean{
    let user = sessionStorage.getItem("user");
    if(user){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    sessionStorage.removeItem("user");
    this.router.navigate(['/']);
  }
}
