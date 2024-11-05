import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptpracticeComponent } from './typescriptpractice.component';

describe('TypescriptpracticeComponent', () => {
  let component: TypescriptpracticeComponent;
  let fixture: ComponentFixture<TypescriptpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
