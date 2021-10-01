import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/feature/login/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
