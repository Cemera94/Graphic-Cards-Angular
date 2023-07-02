import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicCardsItemComponent } from './graphic-cards-item.component';

describe('GraphicCardsItemComponent', () => {
  let component: GraphicCardsItemComponent;
  let fixture: ComponentFixture<GraphicCardsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicCardsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicCardsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
