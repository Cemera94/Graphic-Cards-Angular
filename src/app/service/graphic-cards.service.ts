import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphicCardsSearchResult } from '../model/graphic-cards-search-result.model';
import { Observable, map } from 'rxjs';
import { Comments } from '../model/comments.model';

const baseUrl = "http://localhost:3000/api/cards";

@Injectable({
  providedIn: 'root'
})
export class GraphicCardsService {

  constructor(private http: HttpClient) { }

  getAll(params?: any): Observable<GraphicCardsSearchResult> {
    let options = {};

    if (params) {
      options = {
        params: new HttpParams()
        .set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
      }
    }

    return this.http.get(baseUrl, options).pipe(map((data: any)=>{
      return new GraphicCardsSearchResult(data)
    }))
  }

  getComments(cardId: number): Observable<Comments[]> {
    return this.http.get(`${baseUrl}/${cardId}/comments`).pipe(map((data: any) => {
      
      return data && data.results && data.results.map((elem: any) => new Comments(elem)) || [];
    }))
  }
  
  
}
