import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { UsersComponent } from './users.component';
import { UserService } from 'src/app/services/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute } from '@angular/router';

class MockUserService {
  getUsers() {
    return of([
      { id: 1, name: 'John Doe', phone: '123456789', age: 30 },
      { id: 2, name: 'Jane Doe', phone: '987654321', age: 25 }
    ]);
  }

  removeUser(id: number) {
    return of(null);
  }
}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ MatTableModule, RouterModule.forRoot([]) ],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on initialization', () => {
    spyOn(userService, 'getUsers').and.callThrough();
    component.loadUsers();
    expect(userService.getUsers).toHaveBeenCalled();
    expect(component.dataSource.data.length).toBe(2);
  });

  it('should handle error on loadUsers', () => {
    spyOn(userService, 'getUsers').and.returnValue(throwError('error'));
    spyOn(window, 'alert');
    component.loadUsers();
    expect(window.alert).toHaveBeenCalledWith('ocurrio un error error');
  });

  it('should remove user and reload users', () => {
    spyOn(userService, 'removeUser').and.callThrough();
    spyOn(component, 'loadUsers');
    component.remove(1);
    expect(userService.removeUser).toHaveBeenCalledWith(1);
    expect(component.loadUsers).toHaveBeenCalled();
  });

  it('should handle error on remove', () => {
    spyOn(userService, 'removeUser').and.returnValue(throwError('error'));
    spyOn(window, 'alert');
    component.remove(1);
    expect(window.alert).toHaveBeenCalledWith('ocurrio un error error');
  });
});
