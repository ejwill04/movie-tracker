import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';
import { state } from './fixtures/stubState';

import Movies from '../app/components/movies';

describe('<Movies />', () => {
  describe('when visiting the home page', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Movies movies={state.movies.results} />);
    });

    it('should show text "Now Playing"', () => {
      expect(wrapper.find('h2')).to.contain.text('Upcoming');
    });

    it('should have a link to visit popular movies', () => {
      const Link = wrapper.find('Link');
      expect(Link.props().to).to.equal('/popular');
      expect(Link).to.have.props({ to: '/popular' });
    });

    it('should have props', () => {
      expect(wrapper.props()).to.be.ok;
    });

    it('should render a moviecard', () => {
      expect(wrapper.find('MovieCard')).to.exist;
    });

    it('should render 20 moviecards', () => {
      expect(wrapper.find('MovieCard')).to.have.lengthOf(20);
    });
  });
});
