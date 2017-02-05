import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';
import { state } from './fixtures/singleMovie';
import MovieDescription from '../app/components/MovieDescription';

describe('<MovieDescription />', () => {
  describe('when viewing a description of a movie', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MovieDescription movies={state.movies.results} popularMovies={state.movies.results} params={{ id: 313369 }} />);
    });

    it('should render a className movie-desc', () => {
      expect(wrapper.find('.movie-desc')).to.exist;
    });

    it.skip('should render a className movie-desc', () => {
      const title = wrapper.find('.movie-desc-title');
      expect(title).to.equal('La La Land');
    });
  });
});
