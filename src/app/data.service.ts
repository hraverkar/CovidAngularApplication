import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";

import { catchError, retry, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }
  public REST_API_SERVER = 'https://thevirustracker.com/free-api?';

  public sendGetRequest(query:any) {
    return this.httpClient
      .get<any>(this.REST_API_SERVER, {
        params: new HttpParams({ fromString: "countryTimeline="+query }),
        observe: "response"
      })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
          console.log(res);
        //  console.log(res.headers.get("Link"));
         // this.parseLinkHeader(res.headers.get("Link"));
        })
      );
  }
  
  handleError(handleError: any): any {
    throw new Error("Method not implemented.");
  }
  parseLinkHeader(arg0: any) {
    throw new Error("Method not implemented.");
  }
}
