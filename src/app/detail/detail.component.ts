import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

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

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      let id = params['id']
      this.dataService.getDetailDataWithId(id).subscribe((response) => {
        this.data = response;

        if(this.data != null){
          this.title = this.data.titleEn;
          this.img1 = this.data.image_1;
          this.img2 = this.data.image_2;
          this.img3 = this.data.image_3;
          this.authorImg = this.data.author_id.profilePicture;
          this.authorName = (this.data.author_id.firstName +" "+ this.data.author_id.lastName)
          this.description = this.data.description_en
  
          console.log(this.data);

        }

      })
    });
  }

}
