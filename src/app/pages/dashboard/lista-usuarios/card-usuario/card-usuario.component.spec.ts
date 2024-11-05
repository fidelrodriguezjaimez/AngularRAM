import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CardUsuarioComponent } from './card-usuario.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CardUsuarioComponent', () => {
  let component: CardUsuarioComponent;
  let fixture: ComponentFixture<CardUsuarioComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUsuarioComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUsuarioComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize user properties on ngOnInit', () => {
    const mockUser = {
      image: 'test-image',
      name: 'test-name',
      type: 'test-type',
      species: 'test-species'
    };
    component.user = mockUser;
    component.indice = 1;
    component.ngOnInit();

    expect(component.image).toBe(mockUser.image);
    expect(component.name).toBe(mockUser.name);
    expect(component.type).toBe(mockUser.type);
    expect(component.species).toBe(mockUser.species);
    expect(component.usuario).toBe(mockUser);
  });

  it('should navigate to user on goUsuario', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.usuario = { name: 'test' };
    component.goUsuario();

    expect(navigateSpy).toHaveBeenCalledWith(['/dashboard/usuario'], { queryParams: { user: JSON.stringify(component.usuario) } });
  });
});
