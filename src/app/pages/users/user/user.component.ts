import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  title = '';
  idUser?: number;
  formUser?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.formUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/\d/), Validators.min(18)]]
    });

    this.activatedRouter.params.subscribe({
      next: (params) => {
        // edicion
        if(params['id']){
          this.title = 'Editar Usuario';
          this.idUser = params['id'];
          this.loadUser();
        }else{ // creacion
          this.title = 'Crear Usuario';
        }
      }
    });
  }

  ngOnInit(): void {
    console.log('User');
  }

  loadUser():void{
    if(this.idUser){
      this.userService.getUser(this.idUser).subscribe({
        next: (user)=> {
          this.formUser?.patchValue(user);
        },
        error: () => {
          alert('Ocurrio un error');
        }
      });
    }
  }

  save(): void{
    const user: User = this.formUser?.value as User;

    if(this.idUser){
      // edicion
      this.userService.updateUser(user, this.idUser).subscribe({
        next: ()=> {
          this.router.navigateByUrl('/users');
        },
        error: () => {
          alert('Ocurrio un error');
        }
      });
    }else{
      this.userService.newUser(user).subscribe({
        next: ()=> {
          this.router.navigateByUrl('/users');
        },
        error: () => {
          alert('Ocurrio un error');
        }
      });
    }

  }
}
