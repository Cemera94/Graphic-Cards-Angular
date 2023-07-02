import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GraphicCards } from 'src/app/model/graphic-cards.model';

@Component({
  selector: 'app-graphic-cards-item',
  templateUrl: './graphic-cards-item.component.html',
  styleUrls: ['./graphic-cards-item.component.css']
})
export class GraphicCardsItemComponent implements OnInit {

  @Input() item: GraphicCards = new GraphicCards();
  @Input() itemGrade: number = 0;
  @Output() onTitleClicked: EventEmitter<number> = new EventEmitter();
  @Output() grade: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClicked(cardId: number){
    this.onTitleClicked.emit(cardId);
  }

  onGradeClicked(newGrade: number){
    this.grade.emit(newGrade);
  }
}
