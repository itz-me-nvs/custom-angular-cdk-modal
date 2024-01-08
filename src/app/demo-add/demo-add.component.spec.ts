import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAddComponent } from './demo-add.component';

describe('DemoAddComponent', () => {
  let component: DemoAddComponent;
  let fixture: ComponentFixture<DemoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
