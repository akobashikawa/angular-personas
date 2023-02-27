import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendBaseUrlComponent } from './backend-base-url.component';

describe('BackendBaseUrlComponent', () => {
  let component: BackendBaseUrlComponent;
  let fixture: ComponentFixture<BackendBaseUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendBaseUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendBaseUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
