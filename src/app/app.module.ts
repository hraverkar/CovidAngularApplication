import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";
import { GlobalComponent } from './global/global.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { AleartDialogComponent } from './aleart-dialog/aleart-dialog.component';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalComponent,
    HeaderComponent,
    NewsComponent,
    AleartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    {
      provide: MAT_SNACK_BAR_DATA,
      useValue: {}
    },
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
  ],
  entryComponents:[AleartDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
