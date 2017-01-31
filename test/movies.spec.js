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

    it('should show text "Movies"', () => {
      expect(wrapper.find('div')).to.contain.text('Movies');
    });
  });
});
