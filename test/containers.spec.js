import configureMockStore from 'redux-mock-store';
import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from './setup';
const fakeStore = configureMockStore()({ movies: [] });
