import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl }  from '@angular/forms';
import { StudentdetailsService } from 'src/app/Services/studentData/studentdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
name:string;
pass:number;
  constructor(private _student: StudentdetailsService, private router: Router) {}


  login = new FormGroup({
    name: new FormControl(''),
    psw: new FormControl(''),
  });

  onSubmit(){
     console.log(this.login.value.name);
     if(this.login.value.name == this.name && this.login.value.psw == this.pass){
       sessionStorage.setItem("user",JSON.stringify({
         username: this.name,
         password: this.pass
       }))
       this.router.navigate(['dashboard']);
       console.log("working")
     }
     else{
       alert('Wrong Credentials..!!!!!');
       console.log("its not working");
     }
  }
  ngOnInit() {
    this._student.getData()
    .subscribe(
      (data:any) => {
        console.log(data[0]);
        this.name = data[0].name;
        this.pass = data[0].password;

        console.log(this.name, this.pass + '...from backend data');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
