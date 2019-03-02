export const ON_APP_INIT = 'ON_APP_INIT';
export const CHANGE_HERO = 'CHANGE_HERO';

export function initApp() {
  return { type: ON_APP_INIT };
}

/**
 * @param {string} hero
 */
export function changeHero(hero) {
  return { type: CHANGE_HERO, hero };
}