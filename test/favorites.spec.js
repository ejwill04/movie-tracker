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

    it('should render renderFavoritesList', () => {
      expect(wrapper.find('.movie-list').children).to.have.lengthOf(1);
    });
  });
});
