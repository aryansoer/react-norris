import { changeRandomJokeHero } from "./jokeActions";

export const CHANGE_APP_HERO = 'CHANGE_APP_HERO';

export function changeAppHero(newHero) {
  return (dispatch, getState) => {
    const oldHero = getState().app.hero;

    dispatch({ type: CHANGE_APP_HERO, hero: newHero });
    dispatch(changeRandomJokeHero(oldHero, getState().app.hero));
  };
}