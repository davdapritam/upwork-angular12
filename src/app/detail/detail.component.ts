import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})


export class DetailComponent implements OnInit {
  
  @ViewChild(NgxMasonryComponent) public masonry: DetailComponent;
  
  public masonryOptions: NgxMasonryOptions = {
    gutter: 0
  };
  

  constructor(private dataService: ServiceService, private activatedRoute: ActivatedRoute) {}

  data:any = null;
  desc1:any = null;
  img1:any = null;
  img2:any = null;
  img3:any = null;
  authorImg:any = null;
  authorName:any = null;
  arr:any = null;
  description:any = null;
  title:any = null;

  sty_name:any = null;
  sty_name2:any = null;
  sty_name3:any = null;

  sec_cate:any=null;
  sec_cate2:any=null;
  sec_cate3:any=null;

  tab1: boolean = true;
  tab2: boolean = false;

  activeStatus:boolean = false;
  activeStatus2:boolean = true;

  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe((params) => {
      let para = params['id'];
      let arr = para.split("-");
      let id = arr[arr.length -1];
      console.log(id)
      
      this.dataService.getDetailDataWithId(id).subscribe((response) => {
        this.data = response;

        console.log(this.data);

        if(this.data != null){
          this.title = this.data.titleEn;
          this.img1 = this.data.image_1;
          this.img2 = this.data.image_2;
          this.img3 = this.data.image_3;
          this.authorImg = this.data.author_id.profilePicture;
          this.authorName = (this.data.author_id.firstName +" "+ this.data.author_id.lastName)
          this.description = this.data.description_en

          this.sty_name = this.data.category.nameEn;
          this.sec_cate = this.data.sec_category.nameEn;
  
          console.log(this.data);

        }

      })
    });
  }


  tap1(){
    this.tab1=true;
    this.tab2=false;
    this.activeStatus2=true;
    this.activeStatus = false;
  }

  tap2(){
    this.activeStatus=true;
    this.activeStatus2 = false;

    this.tab2=true;
    this.tab1=false;
  }
}
