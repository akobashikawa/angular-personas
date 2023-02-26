import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrls: ['./holamundo.component.css']
})
export class HolamundoComponent {

  saludo: string = '';
  error: any = '';

  constructor(private http: HttpClient) { }

  hola() {
    this.saludo = '';
    this.error = '';
    this.http.get<any>('http://localhost:3000/hola')
    .subscribe(data => {
      this.saludo = data.saludo;
    }, error => {
      this.error = error.message;
    });

  }
}
