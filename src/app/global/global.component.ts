import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements AfterViewInit {
  
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  public globalStat: any[] = [];
  public totalCase: string;
  public totalRecover: string;
  public totalUnResolve: string;
  public totalDeath: string;
  public newCaseToday: string;
  public newDeath: string;
  public totalActive: string;
  public totalSerious: string;

  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {
    this.dataService
      .getGlobalStat()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.table(res);
        this.globalStat = res.body;
        this.generatedTable(this.globalStat);
      });
  }

  generatedTable(products: any) {
    this.totalCase = products.results[0].total_cases;
    this.totalRecover = products.results[0].total_recovered;
    this.totalUnResolve = products.results[0].total_unresolved;
    this.totalDeath = products.results[0].total_deaths;
    this.newCaseToday = products.results[0].total_new_cases_today;
    this.newDeath = products.results[0].total_new_deaths_today;
    this.totalActive = products.results[0].total_active_cases;
    this.totalSerious = products.results[0].total_serious_cases;
  }
}
