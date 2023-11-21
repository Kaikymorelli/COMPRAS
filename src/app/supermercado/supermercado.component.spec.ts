import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupermercadoComponent } from './supermercado.component';

describe('SupermercadoComponent', () => {
  let component: SupermercadoComponent;
  let fixture: ComponentFixture<SupermercadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupermercadoComponent]
    });
    fixture = TestBed.createComponent(SupermercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
