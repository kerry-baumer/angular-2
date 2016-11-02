import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> { return Promise.resolve(HEROES); }		// stub

    getHeroesSlowly(): Promise<Hero[]> {
	return new Promise<Hero[]>(resolve =>
	    setTimeout(resolve, 4000)) // delay 4 seconds
	.then(() => this.getHeroes());
    }
}
