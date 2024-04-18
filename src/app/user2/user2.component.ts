import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  
  ngOnInit(): void {
  }
  constructor(private route :Router){}
  username!: string;
  password!: string;
  msg!: string;
 
  uname ='sai';
  pass ='sai1234';
  uname1 ='saii';
  pass1 ='sai12345';
  login(){
   if(this.username=== this.uname && this.password=== this.pass){
       this.route.navigate(['/user1'])
   }else{
      this.msg=("Invalid Credentials")
   }
  }
  submit(){
    if(this.username=== this.uname1 && this.password=== this.pass1){
        this.route.navigate(['/user3'])
    }else{
       this.msg=("Invalid Credentials")
    }
   }
}
