import { changeRandomJokeHero } from "./jokeActions";

export const ON_APP_INIT = 'ON_APP_INIT';
export const CHANGE_HERO = 'CHANGE_HERO';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function initApp() {
  return { type: ON_APP_INIT };
}

export function changeHero(newHero) {
  return (dispatch, getState) => {
    const oldHero = getState().app.hero;

    dispatch({ type: CHANGE_HERO, hero: newHero });
    dispatch(changeRandomJokeHero(oldHero, getState().app.hero));
  };
}

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}