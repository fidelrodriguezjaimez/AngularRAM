import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { UserRickMortyDetails } from 'src/app/model/UserRickMortyDetails.model';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listUsuarios: UserRickMortyDetails[] = [];
  loading = true;
  errorMessage: string | null = null;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (users) =>{
        this.listUsuarios = users.results;
        this.loading = false;
      },
      error:(error: Error) => {
        console.log('Error fetching users:'+ error);
        this.loading = false;
      }
    });

    this.usuarioService.getUsuarios().subscribe(data => {
      this.loading = false;
    },
    error => {
      console.log('Error fetching users:'+ error);
      this.errorMessage = error;
      this.loading = false;
    }
  );
  }

}
