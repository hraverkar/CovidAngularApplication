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
  public countryDatas: any[] = [];
  public countryCode: string;
  public Source: any;
  public testBool = false;
  public countryName: any;
  public displayedColumns: any;

  public totalCase: string;
  public totalRecover: string;
  public totalUnResolve: string;
  public totalDeath: string;
  public newCaseToday: string;
  public newDeath: string;
  public totalActive: string;
  public totalSerious: string;
  public countryMap = new Map<string, string>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getCountryDict()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.countryDict(res);
      });
  }

  onSearchClick() {
    let value = this.countryMap.get(this.countryCode.toUpperCase());
    this.dataService
      .getCountryTimeLineRequest(value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.products = res.body;
        this.countryData(value);
        this.generateTimeLineTable(this.products);
      });
  }

  countryData(value: any) {
    this.dataService
      .getCountryTotal(value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.countryDatas = res.body;
        this.generateCountryDataTable(this.countryDatas);
      });
  }

  generateCountryDataTable(singleData: any) {
    this.totalCase = singleData.countrydata[0].total_cases;
    this.totalRecover = singleData.countrydata[0].total_recovered;
    this.totalUnResolve = singleData.countrydata[0].total_unresolved;
    this.totalDeath = singleData.countrydata[0].total_deaths;
    this.newCaseToday = singleData.countrydata[0].total_new_cases_today;
    this.newDeath = singleData.countrydata[0].total_new_deaths_today;
    this.totalActive = singleData.countrydata[0].total_active_cases;
    this.totalSerious = singleData.countrydata[0].total_serious_cases;
  }

  onCancelClick() {
    this.countryCode = null;
    this.testBool = false;
  }

  generateTimeLineTable(products: any) {
    this.countryName = products.countrytimelinedata[0].info.title;
    this.testBool = true;
    let finalArray: any[] = [];
    let data: any = this.products['timelineitems'][0];
    Object.keys(data).forEach((key: any) => {
      let obj = {
        date: key,
        ...data[key]
      };
      finalArray.push(obj);
    });
    finalArray.pop();
    this.displayedColumns = Object.keys(finalArray[0]);
    this.Source = finalArray.reverse();
  }

  countryDict(dataValue: any) {
    for (let i = 0; i < dataValue.body.length; i++) {
      this.countryMap.set(dataValue.body[i].name.toUpperCase(), dataValue.body[i].code);
    }
  }
}
