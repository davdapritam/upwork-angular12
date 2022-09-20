import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  public masonryOptions: NgxMasonryOptions = {
    gutter: 0
  };
    
  constructor(private dataService: ServiceService, public router: Router) { }

  data:any;
  artTitle1:any;
  artTitle2:any;
  desc1:any;
  desc2:any;
  featured:boolean= false;
  featureImg1:any;
  featureImg2:any;

  styleArr:Array<any> = []
  newsArr:Array<any> = []
  pressArr:Array<any> = []
  featuredArr:Array<any> = []

  tab1: boolean = true;
  tab2: boolean = false;
  tab3: boolean = false;
  tab4: boolean = false;

  ngOnInit(): void {

    this.dataService.getData().subscribe((response) => {
      this.data = response;

      for(var i= 0; i < this.data.length ; i++){
        if(this.data[i].featured == true){
          this.featuredArr.push(this.data[i])
        }
        else if(this.data[i].articleCategory == 'style'){
          this.styleArr.push(this.data[i]);
        }
        else if(this.data[i].articleCategory == 'news'){
          this.newsArr.push(this.data[i]);
        }
        else if(this.data[i].articleCategory == 'press'){
          this.pressArr.push(this.data[i]);
        }
      }

      console.log(this.styleArr)

      this.artTitle1 = this.featuredArr[0].titleEn;
      this.featureImg1 = this.featuredArr[0].coverImage;
      this.desc1 = this.featuredArr[0].description_en;
      this.artTitle2 = this.featuredArr[1].titleEn;
      this.featureImg2 = this.featuredArr[1].coverImage;
      this.desc2 = this.featuredArr[1].description_en;
      
      console.log(this.data);
    })
    
  }

  onClick(item:any){

    let itemTitle = item.titleEn.replace(" ","-");
    this.router.navigate(['blog-detail', `${itemTitle}-${item.id}`])
  }

  tap1(){
    this.tab1=true;
    this.tab2=false;
    this.tab3=false;
    this.tab4=false;
  }

  tap2(){
    this.tab2=true;
    this.tab1=false;
    this.tab3=false;
    this.tab4=false;
  }

  tap3(){
    this.tab3=true;
    this.tab1=false;
    this.tab2=false;
    this.tab4=false;
  }

  tap4(){
    this.tab4=true;
    this.tab1=false;
    this.tab2=false;
    this.tab3=false;
  }
}
