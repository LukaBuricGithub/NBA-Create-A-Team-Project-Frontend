import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutTeamComponent } from './details-about-team.component';

describe('DetailsAboutTeamComponent', () => {
  let component: DetailsAboutTeamComponent;
  let fixture: ComponentFixture<DetailsAboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAboutTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
