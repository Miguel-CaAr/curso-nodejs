import { heroes } from "../data/heros";

export const findHeroId = (id: number) => {
  return heroes.find((hero) => hero.id === id);
};
