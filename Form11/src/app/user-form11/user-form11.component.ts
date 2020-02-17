import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-form11',
  templateUrl: './user-form11.component.html',
  styleUrls: ['./user-form11.component.css']
})
export class UserForm11Component implements OnInit {

  // showPfFeilds:boolean = false;
  schemeValue1:string="no";
  schemeValue2:string="no";
  iwvalue:string="no";

  constructor() { }

  ngOnInit() {
  }

  // pfSelectionChanged(v){
  //   debugger;
  //   if (v ="yes"){
  //     this.showPfFeilds = true;
  //   }else{
  //     this.showPfFeilds = false;
  //   }

  // }



}
