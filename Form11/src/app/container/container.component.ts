import { Component, OnInit } from '@angular/core';
import { Form11Table } from '../form11-table';
import { Form11TableService } from '../form11-table.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
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
}
