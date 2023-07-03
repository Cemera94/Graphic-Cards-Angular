import { CommaExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  @Input() cardId: number = 0;
  count: number = 0;

  @Output()
  commentsChanged: EventEmitter<Comments> = new EventEmitter();

  commentForm = new FormGroup({
    author: new FormControl(""),
    text: new FormControl("")
  })

  constructor(private service: GraphicCardsService) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let comment = new Comments(this.commentForm.value);
    comment.date = new Date();
    this.commentsChanged.emit(comment);
    this.commentForm.reset();
    console.log(comment);
    
  }

}
