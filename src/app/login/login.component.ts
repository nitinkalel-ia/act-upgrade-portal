import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseData: any;
  postData: any = {
    account_no: '',  
    pkg_cat_id: '68',
    bundle: 'netflix',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  submitForm() {
    console.log(this.postData.account_no)
  
    this.http.post('https://betafibernet.actcorp.in/plan_change/Plans/Login', this.postData).subscribe(
      (data) => {
        this.responseData = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
	