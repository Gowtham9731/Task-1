import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirExportComponent } from './air-export.component';

describe('AirExportComponent', () => {
  let component: AirExportComponent;
  let fixture: ComponentFixture<AirExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirExportComponent]
    });
    fixture = TestBed.createComponent(AirExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
