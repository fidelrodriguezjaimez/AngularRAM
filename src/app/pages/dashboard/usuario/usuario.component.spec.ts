import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from 'src/app/services/usuario.service';

class MockUsuarioService {}

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => {
        if (key === 'user') {
          return JSON.stringify({
            name: 'Test User',
            gender: 'Male',
            species: 'Human',
            image: 'test-image-url'
          });
        }
        return null;
      }
    }
  },
  queryParams: of({
    user: JSON.stringify({
      name: 'Test User',
      gender: 'Male',
      species: 'Human',
      image: 'test-image-url'
    })
  })
};

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: UsuarioService, useClass: MockUsuarioService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user data from queryParams', () => {
    expect(component.name).toBe('Test User');
    expect(component.gender).toBe('Male');
    expect(component.species).toBe('Human');
    expect(component.image).toBe('test-image-url');
    expect(component.loading).toBeFalse();
  });

  it('should log user data', () => {
    const consoleSpy = spyOn(console, 'log');
    component.getUsuario();
    expect(consoleSpy).toHaveBeenCalledWith('User: ', component.user);
  });
});
