import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './layout/main/main.component';
import { TuyencapComponent } from './layout/tuyencap/tuyencap.component';
import { DoancapComponent } from './layout/doancap/doancap.component';
import { SoicapComponent} from './layout/soicap/soicap.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'home', component: MainComponent, children: [
    {path: 'tuyencap', component: TuyencapComponent},
    {path: 'doancap', component: DoancapComponent},
    {path: 'soicap', component: SoicapComponent},
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
