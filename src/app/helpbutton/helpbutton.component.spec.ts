import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpbuttonComponent } from './helpbutton.component';

describe('HelpbuttonComponent', () => {
  let component: HelpbuttonComponent;
  let fixture: ComponentFixture<HelpbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
