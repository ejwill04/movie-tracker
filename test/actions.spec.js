import { expect } from './setup';
import * as actions from '../app/actions'

describe('action creators', () => {
  describe('ADD_MOVIES', () => {
    let action;
    let data;

    beforeEach(() => {
      data = { value: ['hello', 'world'] };
      action = {
        type: 'ADD_MOVIES',
        data: { value: ['hello', 'world'] },
      };
    });

    it('should create an action to add movies', () => {
      expect(actions.addMovies(data)).to.deep.equal(action);
    });
  });

  describe('should create an action to add a active user', () => {
    let action;
    let user;

    beforeEach(() => {
      user = { userName: 'dude', email: 'dude@dude.com' };
      action = {
        type: 'SET_ACTIVE_USER',
        user,
      };
    });

    it('should create an action to set the active (signed-in) user', () => {
      expect(actions.setActiveUser(user)).to.deep.equal(action);
    });
  });

  describe('should create an action to toggle a favorite', () => {
    let action;
    let id;

    beforeEach(() => {
      id = 1;
      action = {
        type: 'TOGGLE_FAVORITE',
        id,
      };
    });

    it('should create an action to set the active (signed-in) user', () => {
      expect(actions.toggleFavorite(id)).to.deep.equal(action);
    });
  });
});
