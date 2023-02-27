import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

declare var bootstrap: any;

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit, OnDestroy {
  backendBaseUrl: string = '';
  subscription: Subscription = new Subscription;

  nombre: string = '';
  nuevaPersona: any = null;
  personaEliminada: any = null;
  personaEditada: any = {
    id: 0,
    nombre: ''
  };
  personas: any = [];
  myModal: any = null;

  error: any = '';

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.backendBaseUrl.subscribe(backendBaseUrl => this.backendBaseUrl = backendBaseUrl);

    this.myModal = new bootstrap.Modal('#myModal', { });

    this.listar();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  listar() {
    this.error = '';
    const url = this.backendBaseUrl + '/personas';
    this.http.get<any>(url)
    .subscribe(data => {
      this.personas = data;
    }, error => {
      this.error = error.message;
    });
  }

  agregar() {
    this.error = '';
    const url = this.backendBaseUrl + '/personas';
    const body = {
      nombre: this.nombre
    };
    this.http.post<any>(url, body)
    .subscribe(data => {
      this.nuevaPersona = data.saludo;
      this.listar();
    }, error => {
      this.error = error.message;
      this.nuevaPersona = null;
    });
  }

  traer(id: any) {
    this.error = '';
    const url = this.backendBaseUrl + `/personas/${id}`;
    this.http.get<any>(url)
    .subscribe(data => {
      this.personaEditada = data;
    }, error => {
      this.error = error.message;
      this.personaEditada = null;
    });
  }

  guardar() {
    this.error = '';
    const url = this.backendBaseUrl + `/personas/${this.personaEditada.id}`;
    const body = {
      nombre: this.personaEditada.nombre
    };
    this.http.put<any>(url, body)
    .subscribe(data => {
      this.listar();
    }, error => {
      this.error = error.message;
      this.nuevaPersona = null;
    });
  }

  eliminar(persona: any) {
    this.error = '';
    const url = this.backendBaseUrl + `/personas/${persona.id}`;
    const body = {
      nombre: this.personaEditada.nombre
    };
    this.http.delete<any>(url)
    .subscribe(data => {
      this.personaEliminada = data;
      this.listar();
    }, error => {
      this.error = error.message;
      this.nuevaPersona = null;
    });
  }

  abrirModal(persona: any) {
    this.traer(persona.id);
    this.myModal.show();
  }

}
