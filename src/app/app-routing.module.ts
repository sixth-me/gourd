import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'index',component: HomeComponent},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
