import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenFooterComponent } from './green-footer.component';

describe('GreenFooterComponent', () => {
  let component: GreenFooterComponent;
  let fixture: ComponentFixture<GreenFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
