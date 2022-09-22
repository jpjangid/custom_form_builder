import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService implements OnInit {
  constructor(public http: HttpClient) {}
  httpHeaders:any;
  token:any;
  ngOnInit(): void {
    var access_token = localStorage.getItem('access_token');
    if(access_token) {
      this.token = JSON.parse(access_token);
    }
  }

  //send form detail
  saveFormResponse(data?: any) {
    const httpheader = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.post('https://ucci.brandtalks.in/api/form-response',data,{ headers: httpheader });
  }

  //Update payment status
  updatePaymentStatus(order_id?:any,data?:any) {
    const httpheader = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.post('https://ucci.brandtalks.in/api/payment/'+order_id,data,{headers:httpheader})
  }
}
