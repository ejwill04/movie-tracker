import React from 'react';
import { expect } from './setup';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Movies from '../app/components/movies';
import * as actions from '../app/actions';
import { Provider } from 'react-redux';
import MoviesContainer from '../app/containers/MoviesContainer';
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

    it('should render', () => {
      const wrapper = mount(
        <Provider store={fakeStore}>
          <MoviesContainer />
        </Provider>);
      const Component = wrapper.find(MoviesContainer);
      const MoviesComponent = Component.find(Movies);
      expect(Component).to.exist;
      expect(MoviesComponent).to.exist;
    });
  });
});
