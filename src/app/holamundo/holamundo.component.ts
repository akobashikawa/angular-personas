import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent implements OnInit, OnDestroy {

  backendBaseUrl: string = '';
  subscription: Subscription = new Subscription;

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
    this.http.get<any>(this.backendBaseUrl + '/holamundo')
    .subscribe(data => {
      this.saludo = data.saludo;
    }, error => {
      this.error = error.message;
    });

  }
}
