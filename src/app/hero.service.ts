import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add(`HeroService: fetched heroes`);
    return heroes;
  }

  getHero(id: number) {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetch hero id=${id}`);
    return of(hero);
  }
}
