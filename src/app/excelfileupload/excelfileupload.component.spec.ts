import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelfileuploadComponent } from './excelfileupload.component';

describe('ExcelfileuploadComponent', () => {
  let component: ExcelfileuploadComponent;
  let fixture: ComponentFixture<ExcelfileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelfileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
