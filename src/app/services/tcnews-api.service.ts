import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TcnewsApiService {

  constructor(private _http: HttpClient) { }

  // Top Headline Api URL
  thUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1bc8ea900d954fa8acfde53b62ffaee6";

  tnUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1bc8ea900d954fa8acfde53b62ffaee6";
  bnUrl = "https://newsapi.org/v2/top-headlines?country=in&category=buisness&apiKey=1bc8ea900d954fa8acfde53b62ffaee6";

  tcHeadlines(): Observable<any> {
    return this._http.get<any>(this.thUrl);
  }

  tcTechNews():Observable<any>{
    return this._http.get<any>(this.tnUrl);
  }

  tcBusiness() : Observable<any>{
    return this._http.get<any>(this.bnUrl);
  }
}
