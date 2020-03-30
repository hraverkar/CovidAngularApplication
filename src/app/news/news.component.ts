import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements AfterViewInit {
  public countryCode: string;
  public countryName :string;
  public testBool = false;
  public Source:any;
  public displayedColumns: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public products: any[] = [];
  constructor(private dataService: DataService) {}

  ngAfterViewInit(): void {}
  onCancelClick() {
    this.testBool = false;;
    this.countryCode = null;
    this.testBool = false;
  }
  onSearchClick() {

    this.dataService
      .getCountryNewsStat(this.countryCode.toUpperCase())
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.table(res);
        this.products = res.body;
        this.getNewsData(this.products);
      });
  }

  getNewsData(result: any) {
    this.testBool = true;
    this.countryName = result.countrydata[0]['info'].title;
    let finalArray: any[] = [];
      let data: any = result.countrynewsitems[0];
      Object.keys(data).forEach((key: any) => {
        let obj = {
          id: key,
          ...data[key]
        };
        finalArray.push(obj);
      });
    this.displayedColumns = Object.keys(finalArray[0]);
    this.Source = finalArray;
  }
}
