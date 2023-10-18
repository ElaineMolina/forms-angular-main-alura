import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemErrorsComponent } from './mensagem-errors.component';

describe('MensagemErrorsComponent', () => {
  let component: MensagemErrorsComponent;
  let fixture: ComponentFixture<MensagemErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
