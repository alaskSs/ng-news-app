import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './compo/business/business.component';
import { OnlyTechComponent } from './compo/only-tech/only-tech.component';
import { TopHeadlineComponent } from './compo/top-headline/top-headline.component';

const routes: Routes = [
  {path : '',component : TopHeadlineComponent},
  {path : 'tech',component : OnlyTechComponent},
  {path : 'business',component : BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
