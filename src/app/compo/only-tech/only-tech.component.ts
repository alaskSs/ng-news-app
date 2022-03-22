import { Component, OnInit } from '@angular/core';
import { TcnewsApiService } from 'src/app/services/tcnews-api.service';

@Component({
  selector: 'app-only-tech',
  templateUrl: './only-tech.component.html',
  styleUrls: ['./only-tech.component.css']
})
export class OnlyTechComponent implements OnInit {

  techNewsData : any = [];

  constructor(private _api : TcnewsApiService) { }

  ngOnInit(): void {
    this._api.tcTechNews().subscribe((res) =>{
      console.log(res.articles);
      this.techNewsData = res.articles;
    })
  }

}
