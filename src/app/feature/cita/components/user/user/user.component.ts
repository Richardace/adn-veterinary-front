import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/feature/login/login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    console.group("cerrar sesion")
    this.loginService.cerrarSesionUsuario();
    this.router.navigate(['']);
  }

}
