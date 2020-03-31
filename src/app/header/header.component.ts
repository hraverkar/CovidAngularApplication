import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AleartDialogComponent } from '../aleart-dialog/aleart-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MatDialog]
})

export class HeaderComponent implements OnInit {
  constructor(private router: Router,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<AleartDialogComponent>) {}
    message = {
      'title' : "TextError Technologies",
      'address' : "Bengaluru",
      'desingBy': "Design By : Harshal Raverkar & Shefali Sen",
      'Web':"https://hraverkar.netlify.com"
      }

  ngOnInit(): void {}

  onGlobalClick() {
    this.router.navigate(['global'], {});
  }
  onHomeClick() {
    this.router.navigate(['home'], {});
  }
  onNewsClick(){
    this.router.navigate(['news'], {});
  }
  
  onClickfab(){
    let dialogRef = this.dialog.open(AleartDialogComponent, {
      width: '30%',
      height: '30%',
      data: this.message
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
