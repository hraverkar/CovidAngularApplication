import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aleart-dialog',
  templateUrl: './aleart-dialog.component.html',
  styleUrls: ['./aleart-dialog.component.css']
})
export class AleartDialogComponent implements OnInit {
  message: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data;
  }
  ngOnInit(): void {}
}
