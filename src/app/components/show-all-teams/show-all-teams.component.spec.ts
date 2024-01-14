import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTeamsComponent } from './show-all-teams.component';

describe('ShowAllTeamsComponent', () => {
  let component: ShowAllTeamsComponent;
  let fixture: ComponentFixture<ShowAllTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
