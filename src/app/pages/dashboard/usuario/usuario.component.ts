import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  name: string;
  type: string;
  status: string;
  image: string;
  species: string;
  gender: string;
  loading = true;
  user: any;

  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.user = this.aRoute.snapshot.paramMap.get('user');

    this.aRoute.queryParams.subscribe(params => {

      if (params['user']) {
        this.user = JSON.parse(params['user']);
      }

      this.getUsuario();
    });

  }

  getUsuario(): void {
    console.log("User: ", this.user);
      this.name = this.user.name;
      this.gender = this.user.gender;
      this.species = this.user.species;
      this.image = this.user.image;
      this.loading = false;
  }

}
