import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { ADPSPostServiceService } from '../Posts-service.service';


@Component({
  selector: 'app-apds-display',
  templateUrl: './apds-display.component.html',
  styleUrls: ['./apds-display.component.css']
})

export class ApdsDisplayComponent implements OnInit{
  

  posts:{_id:string, id:string, name:string, _v:string}[] = [];

  constructor(public adpspostsservice: ADPSPostServiceService) { }
  
  private postssubscription!: Subscription;
  
  ngOnInit() {
  this.adpspostsservice.getpost_service();
  this.postssubscription= this.adpspostsservice.getUpdateListener() 
  .subscribe((posts:{_id:string, id:string, name:string, _v:string}[])=>
  {
  this.posts = posts;
  
  });
}
  
  ngOnDestroy()
  {
  this.postssubscription.unsubscribe();
  }

  ondelete(postid: string) {
  
  this.adpspostsservice.deletepost_service(postid)
  }
  
}
