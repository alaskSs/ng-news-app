import { Component, OnInit } from '@angular/core';
import { TcnewsApiService } from 'src/app/services/tcnews-api.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  businessData: any = [];
  constructor(private _api: TcnewsApiService) { }

  ngOnInit(): void {
    this._api.tcTechNews().subscribe((res) => {
      console.log(res.articles);
      this.businessData = res.articles;
    })
  }

}
