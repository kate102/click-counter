import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component porps specific to this setup
 * @returns {ShallowWrapper} 
*/ 
const setup = (props={}, state =null) => {
  return shallow(<App {...props} />)
}

/**  */
test('renders without error', () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1); // Find 1 element
})

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1); // Find 1 element
})

test('renders counter display', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1); // Find 1 element
})

test('counter starts at 0', () => {

})

test('clicking button increments counter display', () => {

})