import React from 'react';
import { shallow } from 'enzyme';
import { expect } from './setup';

import App from '../app/components/app';

describe('<Home />', () => {
  describe('when visiting the home page', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('should show text "Movie Watcher"', () => {
      expect(wrapper.find('h1')).to.have.text('Movie Watcher');
    });
  });
});
