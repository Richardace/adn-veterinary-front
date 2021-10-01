import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioHomeComponent } from './feature/usuario/components/usuario-home/usuario-home.component';
import { LoginComponent } from './feature/login/components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CitaModule } from './feature/cita/cita.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './feature/register/components/register/register.component';
import { ListarCitaUserComponent } from '@cita/components/user/listar-cita-user/listar-cita-user.component';
import { ListarCitaComponent } from '@cita/components/admin/listar-cita/listar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsuarioHomeComponent,
    ListarCitaComponent,
    ListarCitaUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    CitaModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule,
    NgbModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
