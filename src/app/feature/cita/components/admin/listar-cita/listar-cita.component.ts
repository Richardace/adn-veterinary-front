import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../../../shared/model/Cita';
import { CitaService } from '../../../shared/service/cita.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  
  cita = {} as Cita;

  citas: Observable<Cita[]>;

  @ViewChild("editarRegistroTemplate", {static: false}) editarRegistroTemplate: TemplateRef<any>;

  constructor(private citaService: CitaService,
              private modalService: NgbModal) { }


  
  editar(cita: Cita){
    this.cita = cita;
    this.modalService.open(this.editarRegistroTemplate);
  }

  ngOnInit(): void {

    this.listarCitas();
  }

  listarCitas(){
    this.citas = this.citaService.consultar();
  }

  guardarCambios(){
    this.citaService.actualizar(this.cita)
     .subscribe( 
      () => {
        console.log("exito")
        this.modalService.dismissAll();
        this.ngOnInit();
      },
      error => {
        alert(error.error.mensaje)
        console.log(error.error.mensaje)
        console.log(error.error.nombreExcepcion)
        this.modalService.dismissAll();
        this.ngOnInit();
      })
  }
  

}
