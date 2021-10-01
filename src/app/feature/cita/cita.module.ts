import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CitaRoutingModule } from './cita-routing.module';
import { CitaService } from './shared/service/cita.service';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { UserComponent } from './components/user/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppModule } from 'src/app/app.module';



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    RouterModule,
    NgbModule,
    HttpClientModule,
    AppModule
  ],
  providers: [CitaService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitaModule { }