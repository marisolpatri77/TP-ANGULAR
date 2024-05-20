import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto5bisComponent } from './punto5bis.component';

describe('Punto5bisComponent', () => {
  let component: Punto5bisComponent;
  let fixture: ComponentFixture<Punto5bisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto5bisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto5bisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
