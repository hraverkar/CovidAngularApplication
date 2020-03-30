import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'global',
    component: GlobalComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
