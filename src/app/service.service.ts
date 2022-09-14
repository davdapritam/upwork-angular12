import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  readonly ROOTURL: any;

  constructor(public http: HttpClient) {
    this.ROOTURL = 'https://uat-apiv2.mnatelier.com/api/women/blogs'
  }

  getData(){
    return this.http.get(`${this.ROOTURL}`);
  }

  getDetailData(){
    return this.http.get("https://uat-apiv2.mnatelier.com/api/women/blogs/");
  }
  
  getDetailDataWithId(id:any){
    return this.http.get(`https://uat-apiv2.mnatelier.com/api/women/blogs/${id}`);
  }
}
