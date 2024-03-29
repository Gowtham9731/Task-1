import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirImportComponent } from './air-import.component';

describe('AirImportComponent', () => {
  let component: AirImportComponent;
  let fixture: ComponentFixture<AirImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirImportComponent]
    });
    fixture = TestBed.createComponent(AirImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
