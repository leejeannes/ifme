/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { setup } from './i18n/setup';

Enzyme.configure({ adapter: new Adapter() });
window.alert = () => {};
window.location.reload = () => {};
window.document.execCommand = () => {};
setup();

export { React, TestUtils };
