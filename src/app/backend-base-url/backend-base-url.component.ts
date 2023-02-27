import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-backend-base-url',
  templateUrl: './backend-base-url.component.html',
  styleUrls: ['./backend-base-url.component.css']
})
export class BackendBaseUrlComponent implements OnInit, OnDestroy {
  backendBaseUrl: string = '';
  subscription: Subscription = new Subscription;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.backendBaseUrl.subscribe(url => this.backendBaseUrl = url)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setBackendBaseUrl() {
    this.data.setBackendBaseUrl(this.backendBaseUrl);
  }
}
