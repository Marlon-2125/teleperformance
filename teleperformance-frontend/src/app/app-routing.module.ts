import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExtraHoursComponent } from './components/addExtraHours/add_extra_hours.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
