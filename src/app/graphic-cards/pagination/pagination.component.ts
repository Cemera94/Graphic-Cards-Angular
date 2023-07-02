import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number = 1;
  @Input() pageSize: number = 0;
  @Input() count: number = 0;

  @Output() onPageChange: EventEmitter<number> = new EventEmitter();
  @Output() onPageSizeChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(newPage: number){
    this.onPageChange.emit(newPage);    
  }

  onPageSizeClick(pageSize: number){
    this.onPageSizeChange.emit(pageSize);    
  }
}
