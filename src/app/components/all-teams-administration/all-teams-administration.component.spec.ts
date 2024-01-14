import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeamsAdministrationComponent } from './all-teams-administration.component';

describe('AllTeamsAdministrationComponent', () => {
  let component: AllTeamsAdministrationComponent;
  let fixture: ComponentFixture<AllTeamsAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTeamsAdministrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTeamsAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
