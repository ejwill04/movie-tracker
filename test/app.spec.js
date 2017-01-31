import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/components/app';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';

chai.use(chaiEnzyme());
chai.use(chaiJsx);

var expect = chai.expect;

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
