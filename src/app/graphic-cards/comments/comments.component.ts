import { CommaExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CommentsSearchResult } from 'src/app/model/comments-search-result.model';
import { Comments } from 'src/app/model/comments.model';
import { GraphicCards } from 'src/app/model/graphic-cards.model';
import { GraphicCardsService } from 'src/app/service/graphic-cards.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() graphicCard: GraphicCards = new GraphicCards();
  @Input() comments: Comments[] = [];
  count: number = 0;

  constructor(private service: GraphicCardsService) { }

  ngOnInit(): void {
    
  }

}
