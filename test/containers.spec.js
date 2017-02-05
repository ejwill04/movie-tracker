import React from 'react';
import sinon from 'sinon';
import { expect } from './setup';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Movies from '../app/components/movies';
import * as actions from '../app/actions';
const fakeStore = configureMockStore()({ movies: [] });

describe('containers', () => {
  describe('Movies', () => {
    it('dispatches actions', () => {
      fakeStore.dispatch(actions.addMovies([{ id: 1 }]));
      const fakeActions = fakeStore.getActions();
      expect(fakeActions).to.deep.equal(
        [actions.addMovies(
          [{ id: 1 }]
        )]
      );
    });
  });
});
