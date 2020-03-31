import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleartDialogComponent } from './aleart-dialog.component';

describe('AleartDialogComponent', () => {
  let component: AleartDialogComponent;
  let fixture: ComponentFixture<AleartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleartDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
