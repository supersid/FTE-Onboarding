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
  Id=1;
task = {
  "id":this.Id,
  "father_name":"",
  "Dob":"",
  "Gender":"",
  "marital_status":"",
  "emailid":"",
  "contact":"",
  "scheme_1952": "",
  "scheme_1955": "",
  "UAN": "",
  "Pfnumber": "",
  "exitdate": "",
  "schemenumber": "",
  "PPO": "",
  "int_worker": "",
  "Country": "",
  "passport": "",
  "fromdate":"",
  "todate":"",
  "Ifscode":"",
  "Ifscodefile": "",
  "Aadhar":"",
  "Aadharfile":"",
  "Pan":"",
  "Panfile":""
}
joinlist=[];

  constructor(private form11Service: Form11TableService) { }

  ngOnInit() {
    return this.form11Service.get_user_data(this.Id).subscribe((res)=>{
      this.task.father_name=res.father_name;
      // this.task.Dob = res.dob;
      this.task.Gender = res.gender;
      this.task.marital_status = res.marital_status;
      this.task.emailid = res.email_Id;
      this.task.contact = res.mobile_no;
      this.task.Aadhar = res.aadhar_no;
      this.task.Pan = res.pan_no;

    });
  }
  // onSubmit(form11user){
  //   this.task.scheme_1952=form11user.value.scheme_1952;
  //   this.task.scheme_1955=form11user.value.scheme_1955;
  //   this.task.uan=form11user.value.uan;
  //   this.task.pf_number=form11user.value.pf_number;
  //   this.task.exit_date_emp=form11user.value.exit_date_emp;
  //   this.task.scheme_certificate_no=form11user.value.scheme_certificate_no;
  //   this.task.ppo=form11user.value.ppo;
  //   this.task.int_worker=form11user.value.int_worker;
  //   this.task.country=form11user.value.country;
  //   this.task.passport_no=form11user.value.passport_no;
  //   this.task.ifs_code=form11user.value.ifs_code;
  //   this.task.ifscodefile=form11user.value.ifscodefile;
  //   this.form11Service.addTask(this.task).subscribe((res)=>{
  //           this.joinlist=res;

  //   })
  // }
  // onSubmit1(){
  //   this.router.navigate(['/pf-form1']);
  //   this.rout=true;
  //   this.firstService.saveEpsData(this.get_data).subscribe((res)=>{
  //     console.log(res)
  //     if(res){
  //       this.get=res;
 
  //     }
  //   });
  // }
}
  


  // pfSelectionChanged(v){
  //   debugger;
  //   if (v ="yes"){
  //     this.showPfFeilds = true;
  //   }else{
  //     this.showPfFeilds = false;
  //   }

  
