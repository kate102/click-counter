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
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper} 
*/ 
const setup = (props={}, state =null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state) // Passes the state down
  return wrapper;

}

/**
 * Return ShalllowWrapper containing node(s) with the given data-test value
 * @param {ShalllowWrapper} wrapper - Enzymen shallow wrapper to search with.
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper} 
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

/**  */
test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1); // Find 1 element
})

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1); // Find 1 element
})

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1); // Find 1 element
})

/**
 * Need to manipulate state
 */
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0); // Find 1 element
})

test('clicking button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  // Find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // Find display and check value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter+1)

})