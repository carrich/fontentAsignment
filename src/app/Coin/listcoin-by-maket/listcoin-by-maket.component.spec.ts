import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcoinByMaketComponent } from './listcoin-by-maket.component';

describe('ListcoinByMaketComponent', () => {
  let component: ListcoinByMaketComponent;
  let fixture: ComponentFixture<ListcoinByMaketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcoinByMaketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcoinByMaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
