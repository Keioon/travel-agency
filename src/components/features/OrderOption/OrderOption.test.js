import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedName = 'name';
    const expectedType = 'type';
    const component = shallow(<OrderOption type={expectedType} name={expectedName} />);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without requires props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render correct title', () => {
    const expectedName = 'name';
    const expectedType = 'text';
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component.find('.title').text()).toEqual(expectedName);
  });
});