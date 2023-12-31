import { findHeroId } from "./services/hero.service";


const hero = findHeroId(4);

console.log(hero?.name ?? 'Hero not found ')