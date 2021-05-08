import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated link to addres', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary image={'image'} name={'name'} tags={[]} cost={'cost'} days={1} id={expectedId} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('should render good source and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(<TripSummary image={expectedImage} tags={[]} name={expectedName} cost={'cost'} days={1} id={'id'} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render props name, cost, days', () => {
    const expectedName = 'name';
    const expectedDays = 1;
    const expectedCost = '100';
    const component = shallow(<TripSummary image={'image'} tags={[]} name={expectedName} cost={expectedCost} days={1} id={'id'} />);
    expect(component.find('.title').text()).toEqual(expectedName);
    //expect(component.find('.details').text()).toEqual(`${expectedDays} daysfrom ${expectedCost}`);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
  });
});