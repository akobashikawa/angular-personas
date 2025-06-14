import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private backendBaseUrlSource = new BehaviorSubject('http://localhost:8080');
  backendBaseUrl = this.backendBaseUrlSource.asObservable();

  constructor() { }

  setBackendBaseUrl(url: string) {
    this.backendBaseUrlSource.next(url)
  }
}
