import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';

import Favorites from '../app/components/favorites';

describe('<Favorites />', () => {
  describe('when visiting the home page', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Favorites />);
    });

    it('should show text "Favorites"', () => {
      expect(wrapper.find('h2')).to.have.text('Favorites');
    });
  });
});
