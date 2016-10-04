import React from 'react';
import {shallow} from 'enzyme';

describe('Button', () => {
  it('should contain a `button` element', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should call the `onClick` handler when the button is clicked', () => {
    const clickSpy = jasmine.createSpy('clickSpy');
    const wrapper = shallow(<Button onClick={clickSpy} />);

    wrapper.find('button').simulate('click');

    expect(clickSpy).toHaveBeenCalled();
  });
});
