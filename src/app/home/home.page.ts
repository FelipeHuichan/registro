import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router
  ) {}
  iniciarSesion(){
    this.router.navigate(['/inicia'])
  }

  agregarProductos(){
    this.router.navigate(['/agregar-productos'])
  }

  listarProductos(){
    this.router.navigate(['/listar-productos'])
  }

  RegistrarUsuario(){
    this.router.navigate(['/registro'])
  }
}
