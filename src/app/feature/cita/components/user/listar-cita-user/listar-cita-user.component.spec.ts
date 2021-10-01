import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CitaService } from '@cita/shared/service/cita.service';
import { HttpService } from '@core/services/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ListarCitaUserComponent } from './listar-cita-user.component';

describe('ListarCitaUserComponent', () => {
  let component: ListarCitaUserComponent;
  let fixture: ComponentFixture<ListarCitaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitaUserComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, HttpService ,NgbModal],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
