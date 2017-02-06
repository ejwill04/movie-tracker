import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';
import { state } from './fixtures/stubState';

import Favorites from '../app/components/favorites';

describe('<Favorites />', () => {
  describe('when visiting the home page', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Favorites
          movies={state.movies.results}
          popularMovies={{}}
        />
      );
    });

    it('should show text "Favorites"', () => {
      expect(wrapper.find('h2')).to.have.text('Favorites');
    });

    it('should render three <MovieCard /> components', () => {
      const MovieCard = wrapper.find('MovieCard');
      expect(MovieCard).to.have.lengthOf(3);
    });

    it.skip('should return null if no movies or popularMovies', () => {
      wrapper = shallow(
        <Favorites
        />
      );
      expect(wrapper).type().to.equal(null);
    });
  });
});
