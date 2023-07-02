import { Component, OnInit } from '@angular/core';
import { GraphicCardsService } from '../service/graphic-cards.service';
import { GraphicCardsSearchResult } from '../model/graphic-cards-search-result.model';
import { GraphicCards } from '../model/graphic-cards.model';
import { Comments } from '../model/comments.model';

@Component({
  selector: 'app-graphic-cards',
  templateUrl: './graphic-cards.component.html',
  styleUrls: ['./graphic-cards.component.css']
})
export class GraphicCardsComponent implements OnInit {

  graphicCards: GraphicCards[] = [];
  count: number = 0;
  comments: Comments[] = [];
  cardId: number = -1;
  grade: number = 0;

  queryParams = {
    page: 1,
    pageSize: 5
  }

  constructor(private service: GraphicCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void{
    this.service.getAll(this.queryParams).subscribe({
      next: (graphicSearchResult: GraphicCardsSearchResult) => {
        this.graphicCards = graphicSearchResult.results
        this.count = graphicSearchResult.count      
        console.log(this.graphicCards);
                  
      },
      error: (err) => { console.log(err) }
    })
  }

  onPageChanged(newPage: number){
    this.queryParams.page = newPage;    
    this.getCards();
  }

  onPageSizeChanged(PageSize: number){
    this.queryParams.pageSize = PageSize;    
    this.getCards();
  }

  getComments(): void {
    this.service.getComments(this.cardId).subscribe({
      next: (comments: Comments[]) => {
        this.comments = comments;
        console.log(comments);
        
      },
      error: (err) => {console.log(err)}
    })
  }

  onCardtitleClicked(newCardId: number){
    this.cardId = newCardId;    
    this.getComments();
  }

  onGradeButtonClicked(newGrade: number){
    this.grade = newGrade;    
  }
}
