import { expect } from './setup';
import * as actions from '../app/actions';

describe('action creators', () => {
  describe('ADD_MOVIES', () => {
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

  describe('should create an action to add a active user', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { userName: 'dude', email: 'dude@dude.com' };
      action = {
        type: 'SET_ACTIVE_USER',
        data,
      };
    });

    it('should create an action to set the active (signed-in) user', () => {
      expect(actions.setActiveUser(data)).to.deep.equal(action);
    });
  });

  describe('should create an action to toggle a favorite', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { title: 'movieTitle' };
      action = {
        type: 'TOGGLE_FAVORITE',
        data,
      };
    });

    it('should create an action to set the active (signed-in) user', () => {
      expect(actions.toggleFavorite(data)).to.deep.equal(action);
    });
  });
});
