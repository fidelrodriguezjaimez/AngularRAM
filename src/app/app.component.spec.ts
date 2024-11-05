import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CompanyFront'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CompanyFront');
  });

  it('should display "Curso Angular" in the toolbar', () => {
    fixture.detectChanges();
    const toolbarElement = fixture.debugElement.query(By.css('mat-toolbar'));
    const spanElement = toolbarElement.query(By.css('span'));
    expect(spanElement.nativeElement.textContent).toContain('Curso Angular');
  });
});
