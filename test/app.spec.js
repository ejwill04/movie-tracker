import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from './setup';

import App from '../app/components/app';

describe('<Home />', function () {
  describe('when visiting the home page', function () {
    let wrapper;

    it('should show text "Film Favs"', () => {
      wrapper = shallow(<App />);
      expect(wrapper.find('h1')).to.have.text('Film Favs');
    });

    it('has a componentDidMount method', () => {
      sinon.spy(App.prototype, 'componentDidMount');
      mount(<App />);
      expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    });
  });
});
