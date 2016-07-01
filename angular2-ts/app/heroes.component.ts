import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';
import { NotificationService } from './notification.service'


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  //styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private router: Router,
    private heroService: HeroService,
    private notificationService: NotificationService) {
  }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }

  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }

  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.notificationService.success('Hero deleted!');
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error); // TODO: Display error message
  }


  onSelect(hero: Hero) { this.selectedHero = hero; }
}

