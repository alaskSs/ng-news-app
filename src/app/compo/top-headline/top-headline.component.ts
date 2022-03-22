import { Component, OnInit } from '@angular/core';
import { TcnewsApiService } from 'src/app/services/tcnews-api.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  constructor(private _api: TcnewsApiService) { }

  topHeadlineData: any = [];

  ngOnInit(): void {
    this._api.tcHeadlines().subscribe(
      (result) => { console.log(result.articles);
      this.topHeadlineData = result.articles;
      })
  }
}
