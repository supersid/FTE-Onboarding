import { Component, OnInit } from '@angular/core';
import { Form11Table } from '../form11-table';
import { Form11TableService } from '../form11-table.service';


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
  form11 = new Form11Table();
task = {
  scheme_1952: "",
  scheme_1955: "",
  uan: "",
  pf_number: "",
  exit_date_emp: "",
  scheme_certificate_no: "",
  ppo: "",
  int_worker: "",
  country: "",
  passport_no: "",
  ifs_code: ""
}
joinlist=[];

  constructor(private form11Service: Form11TableService) { }

  ngOnInit() {
  }
  onSubmit(form11user){
    this.task.scheme_1952=form11user.value.scheme_1952;
    this.task.scheme_1955=form11user.value.scheme_1955;
    this.task.uan=form11user.value.uan;
    this.task.pf_number=form11user.value.pf_number;
    this.task.exit_date_emp=form11user.value.exit_date_emp;
    this.task.scheme_certificate_no=form11user.value.scheme_certificate_no;
    this.task.ppo=form11user.value.ppo;
    this.task.int_worker=form11user.value.int_worker;
    this.task.country=form11user.value.country;
    this.task.passport_no=form11user.value.passport_no;
    this.task.ifs_code=form11user.value.ifs_code;
    this.form11Service.addTask(this.task).subscribe((res)=>{
            this.joinlist=res;

    })
  }
}
  


  // pfSelectionChanged(v){
  //   debugger;
  //   if (v ="yes"){
  //     this.showPfFeilds = true;
  //   }else{
  //     this.showPfFeilds = false;
  //   }

  
