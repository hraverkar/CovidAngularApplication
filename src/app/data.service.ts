import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError, retry, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  public REST_API_SERVER = 'https://thevirustracker.com/free-api?';

  public getCountryTimeLineRequest(query:any) {
    return this.httpClient
      .get<any>(this.REST_API_SERVER, {
        params: new HttpParams({ fromString: "countryTimeline="+query }),
        observe: "response"
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
        })
      );
  }

  public getCountryTotal(query:any){
    return this.httpClient
    .get<any>(this.REST_API_SERVER, {
      params: new HttpParams({ fromString: "countryTotal="+query }),
      observe: "response"
    })
    .pipe(
      retry(3),
      catchError(this.handleError),
      tap(res => {
      })
    );
  }

  public getGlobalStat() {
    return this.httpClient
      .get<any>(this.REST_API_SERVER, {
        params: new HttpParams({ fromString: "global=stats" }),
        observe: "response"
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
        })
      );
  }

  public getCountryNewsStat(query:any) {
    return this.httpClient
      .get<any>(this.REST_API_SERVER, {
        params: new HttpParams({ fromString: "countryNewsTotal="+query }),
        observe: "response"
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
        })
      );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "Unknow error!;";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error :${error.error.message}`;
    } else {
      errorMessage = `Error : ${error.status} \nMessage :${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  getCountryDict(){
    return this.httpClient
    .get<any>("assets/country.json", {
      params: new HttpParams({ }),
      observe: "response"
    })
    .pipe(
      retry(3),
      catchError(this.handleError),
      tap(res => {
      })
    );
  }

}
