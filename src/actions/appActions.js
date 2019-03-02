export const ON_APP_INIT = 'ON_APP_INIT';
export const CHANGE_HERO = 'CHANGE_HERO';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function initApp() {
  return { type: ON_APP_INIT };
}

/**
 * @param {string} hero
 */
export function changeHero(hero) {
  return { type: CHANGE_HERO, hero };
}

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}