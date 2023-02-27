import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit, OnDestroy {

  backendBaseUrl: string = '';
  subscription: Subscription = new Subscription;

  nombre: string = '';
  saludo: string = '';
  error: any = '';

  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.backendBaseUrl.subscribe(backendBaseUrl => this.backendBaseUrl = backendBaseUrl)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  hola() {
    this.saludo = '';
    this.error = '';
    const body = {
      nombre: this.nombre
    };
    this.http.post<any>(this.backendBaseUrl + '/hola', body)
    .subscribe(data => {
      this.saludo = data.saludo;
    }, error => {
      this.error = error.message;
    });

  }
}
