import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosFerramentaComponent } from './dados-ferramenta.component';

describe('DadosFerramentaComponent', () => {
  let component: DadosFerramentaComponent;
  let fixture: ComponentFixture<DadosFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosFerramentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
