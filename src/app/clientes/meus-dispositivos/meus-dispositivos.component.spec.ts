import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusDispositivosComponent } from './meus-dispositivos.component';

describe('MeusDispositivosComponent', () => {
  let component: MeusDispositivosComponent;
  let fixture: ComponentFixture<MeusDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusDispositivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
