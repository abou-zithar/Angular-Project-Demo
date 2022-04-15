import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }

  getNews(mediaType:string):Observable <any>
  {
    return this._httpClient.get(`https://newsapi.org/v2/top-headlines?country=${mediaType}&category=health&apiKey=4009e3fbe03a4a5c944a011e949551b5`)
  }
}

