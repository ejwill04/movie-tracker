import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';

import App from '../app/components/app';

describe('<Home />', function () {
  describe('when visiting the home page', function () {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should show text "Film Favs"', () => {
      expect(wrapper.find('h1')).to.have.text('Film Favs');
    });
  });
});
