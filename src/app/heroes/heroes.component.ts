import { Component, OnInit } from '@angular/core';
//import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { 
    
  }
  heroes: Hero[];
  //selectedHero: Hero;

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }*/
  ngOnInit() {
    this.getHeroes();
  }

}