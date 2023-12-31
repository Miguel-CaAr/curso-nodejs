"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroId = void 0;
const heros_1 = require("../data/heros");
const findHeroId = (id) => {
    return heros_1.heroes.find((hero) => hero.id === id);
};
exports.findHeroId = findHeroId;
