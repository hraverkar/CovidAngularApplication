import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  public products: any[] = [];
  public data: any[] = [];
  public countryCode:string;
  public Source:any;

  displayedColumns: string[] = ['new_daily_cases', 'new_daily_deaths', 'total_cases', 'total_recoveries', 'total_deaths'];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  onSearchClick(){
    this.dataService
    .sendGetRequest(this.countryCode)
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: HttpResponse<any>) => {
      console.table(res);
      this.products = res.body;
      console.log(this.products);
      this.generatedTable(this.products);
    }); 
  }

  generatedTable(products:any){
    let t = JSON.stringify(this.products["timelineitems"]);
    console.log(t);
      }
  
}
