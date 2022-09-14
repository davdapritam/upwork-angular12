import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private dataService: ServiceService, public router: Router) { }

  data:any;
  imgLink:any;
  artTitle1:any;
  artTitle2:any;
  desc1:any;

  ngOnInit(): void {

    this.dataService.getData().subscribe((response) => {
      this.data = response;
      this.artTitle1 = this.data[0].titleEn;
      this.desc1 = this.data[0].description_en;
      this.imgLink = this.data[0].coverIimage;
      console.log(this.data);
    })
    
  }

  onClick(id:any){
    this.router.navigate(['detail', {id}])
  }

}
