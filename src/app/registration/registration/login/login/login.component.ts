import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { SharedServiceService } from 'src/app/sharedService/shared-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:any;
   email: any;
   password: any;
   array:any;
   myarray:any;
  constructor(private router:Router, private sharedserviceservice: SharedServiceService) { }
  ngOnInit(): void {

    console.log( this.sharedserviceservice.recieveMessage())
    this.myarray = this.sharedserviceservice.recieveMessage()
    this.loginForm = new FormGroup({
      'email':new FormControl("",[Validators.required]),
      'password': new FormControl ("", [Validators.required])
       })
       

  }
  login(){
    console.log(this.loginForm)
    //for(var i=0; i< this.myarray.length; i++){
    //console.log(this.myarray[i].email)
   // }
    for(var i=0; i< this.myarray.length; i++)
    if(this.loginForm.value.email == this.myarray[i].email && this.loginForm.value.password==this.myarray[i].password){
      this.router.navigate(['/dashboard'])
      }else{
         alert('Invalid Username & password')
      }
  }

}
