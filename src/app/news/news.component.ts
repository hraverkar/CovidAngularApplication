import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public countryCode: string;
  public countryName: string;
  public testBool = false;
  public Source: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  public newsProducts: any[] = [];
  public products: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  onCancelClick() {
    this.testBool = false;
    this.countryCode = null;
  }
  onSearchClick() {
    this.dataService
      .getCountryNewsStat(this.countryCode.toUpperCase())
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        this.newsProducts = res.body;
        this.getNewsData(this.newsProducts);
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
    finalArray.pop();
    finalArray.sort((a, b) => b.id - a.id);
    let arr = finalArray.slice(0, 100);
    this.products = arr;
  }
}
