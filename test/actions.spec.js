import { expect } from './setup';
import * as actions from '../app/actions';

describe('actions', () => {
  describe('should create an action ADD_MOVIES to store movie API data', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { value: ['hello', 'world'] };
      action = {
        type: 'ADD_MOVIES',
        data,
      };
    });

    it('should create an action to add movies', () => {
      expect(actions.addMovies(data)).to.deep.equal(action);
    });
  });

  describe('should create an action SET_LOGIN_ERROR_MESSAGE to store errorMessage data', () => {
    let action;
    let data;

    beforeEach(() => {
      data = 'error message';
      action = {
        type: 'SET_LOGIN_ERROR_MESSAGE',
        data,
      };
    });

    it('should create an action to store error messages', () => {
      expect(actions.setLoginErrorMessage(data)).to.deep.equal(action);
    });
  });

  describe('should create an action SET_ACTIVE_USER to add an active user', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { userName: 'dude', email: 'dude@dude.com' };
      action = {
        type: 'SET_ACTIVE_USER',
        data,
      };
    });

    it('should create an action TOGGLE_FAVORITE to set the active (signed-in) user', () => {
      expect(actions.setActiveUser(data)).to.deep.equal(action);
    });
  });

  describe('should create an action TOGGLE_FAVORITE to set/unset a movie as a favorite', () => {
    let action;
    let data;
    let favoriteId = 1;

    beforeEach(() => {
      data = { title: 'movieTitle' };
      action = {
        type: 'TOGGLE_FAVORITE',
        favoriteId,
        data,
      };
    });

    it('should create an action to set the active (signed-in) user', () => {
      expect(actions.toggleFavorite(data, favoriteId)).to.deep.equal(action);
    });
  });

  describe('should create an action append_movies to add additional movies to state', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { title: 'movieTitle' };
      action = {
        type: 'APPEND_MOVIES',
        data,
      };
    });

    it('should create an action to append additional movies to the page', () => {
      expect(actions.appendMovies(data)).to.deep.equal(action);
    });
  });
});
