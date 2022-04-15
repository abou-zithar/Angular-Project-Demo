import { Component, OnInit } from '@angular/core';
import {NewsService} from './../news.service'
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  MedicalNews: any[]=[]
  MedicalNewsUK:any[]=[]
  constructor(private _newsService:NewsService) { 

   
  }
  ngOnInit(): void {
    this._newsService.getNews('us').subscribe((response)=>{
      this.MedicalNews=response.articles.slice(0,10);
      console.log(response.articles);
      
      
    })

    this._newsService.getNews('gb').subscribe((response)=>{
      this.MedicalNewsUK=response.articles.slice(0,10);
      console.log(response.articles);
      
      
    })
  }

  

}
