import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent {

  constructor(private router: Router) { }

  irDashboard(): void {
    // guardamos los datos en el formulario o hacemos alguna logica
    // redireccionamos
    this.router.navigate(['/dashboard']);
  }
}
