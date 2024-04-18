import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor() { }
      
  ngOnInit(): void {
  }
  fname:string='';
  Place:string='';
  Designation:string='';
  Experiance:string='';
  data: { fname: string, Place: string, Designation: string, Experiance: string }[] = [];
  add(){
    if (this.fname && this.Place && this.Designation && this.Experiance !== null){
      this.data.push({
        fname: this.fname,
        Place: this.Place,
        Designation: this.Designation,
        Experiance: this.Experiance
      });
      // this.data.reset();
       this.fname='';
       this.Place='';
       this.Designation='';
       this.Experiance='';
    }
    else{}
  }
  edit(data:any){
    this.fname= data.fname;
    this.Place=data.Place;
    this.Designation=data.Designation;
    this.Experiance= data.Experiance;
  }
}
