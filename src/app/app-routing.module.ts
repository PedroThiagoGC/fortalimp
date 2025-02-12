import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaddingPageComponent } from './components/ladding-page/ladding-page.component';

const routes: Routes = [
  { path: '', component: LaddingPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
