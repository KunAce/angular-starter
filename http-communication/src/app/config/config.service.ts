import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = "assets/config.json";

  constructor(private http: HttpClient) { }

  getConfig_v1() {
    return this.http.get(this.configUrl);
  }

  getConfig_v2() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, {observe: 'response'}
    );
  }

}
