import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { UserComponent } from './user.component';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockUserService {
  getUser(id: number) {
    return of({ name: 'John Doe', phone: '1234567890', age: 30 });
  }
  updateUser(user: any, id: number) {
    return of(null);
  }
  newUser(user: any) {
    return of(null);
  }
}

const mockActivatedRoute = {
  params: of({ id: 1 })
};

const routes: Routes = [
  { path: 'users', component: UserComponent }
];

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule.withRoutes(routes)],
      declarations: [UserComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with user data when editing', () => {
    expect(component.formUser?.value).toEqual({
      name: 'John Doe',
      phone: '1234567890',
      age: 30
    });
  });

  it('should call updateUser when saving an existing user', () => {
    const spy = spyOn(userService, 'updateUser').and.callThrough();
    component.save();
    expect(spy).toHaveBeenCalledWith(component.formUser?.value, 1);
  });

  it('should call newUser when saving a new user', () => {
    component.idUser = undefined;
    const spy = spyOn(userService, 'newUser').and.callThrough();
    component.save();
    expect(spy).toHaveBeenCalledWith(component.formUser?.value);
  });

  it('should handle error on loadUser', () => {
    spyOn(userService, 'getUser').and.returnValue(throwError('error'));
    const alertSpy = spyOn(window, 'alert');
    component.loadUser();
    expect(alertSpy).toHaveBeenCalledWith('Ocurrio un error');
  });

  it('should handle error on save for updateUser', () => {
    spyOn(userService, 'updateUser').and.returnValue(throwError('error'));
    const alertSpy = spyOn(window, 'alert');
    component.save();
    expect(alertSpy).toHaveBeenCalledWith('Ocurrio un error');
  });

  it('should handle error on save for newUser', () => {
    component.idUser = undefined;
    spyOn(userService, 'newUser').and.returnValue(throwError('error'));
    const alertSpy = spyOn(window, 'alert');
    component.save();
    expect(alertSpy).toHaveBeenCalledWith('Ocurrio un error');
  });
});
