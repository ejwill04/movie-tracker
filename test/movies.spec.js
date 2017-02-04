import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';

import Movies from '../app/components/movies';

describe('<Movies />', () => {
  describe('when visiting the home page', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Movies />);
    });

    it('should show text "Now Playing"', () => {
      expect(wrapper.find('h2')).to.contain.text('Upcoming');
    });

    it('should have a link to visit popular movies', () => {
      const Link = wrapper.find('Link');
      expect(Link.props().to).to.equal('/popular');
      expect(Link).to.have.props({ to: '/popular' });
    });
  });
});
