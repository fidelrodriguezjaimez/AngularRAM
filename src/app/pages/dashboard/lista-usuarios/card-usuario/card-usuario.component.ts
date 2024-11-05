import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})

export class CardUsuarioComponent  implements OnInit {
  @Input() user: any;
  @Input() indice: any;
  image: string;
  name: string;
  species: string;
  type: string;
  ident: BigInteger;
  usuario: any;

  constructor(private router: Router) {
    console.log("Method not implemented.");
   }

  ngOnInit(): void {
    this.image = this.user.image;
    this.name = this.user.name;
    this.type = this.user.type;
    this.species = this.user.species;
    this.usuario = this.user;
    this.ident = this.indice;
  }

  goUsuario(): void{
    this.router.navigate(['/dashboard/usuario'],{ queryParams: { user: JSON.stringify(this.usuario) } });
  }
}
