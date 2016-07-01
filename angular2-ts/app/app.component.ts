import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { NotificationService } from './notification.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  //styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    NotificationService,
  ]
})

@RouteConfig([
{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
},
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
},
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}

