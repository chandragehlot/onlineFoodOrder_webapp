import React from 'react';
import {
  MemoryRouter as Router,
    Link
  } from 'react-router-dom';

import { mount } from 'enzyme';
import AppHeader from '../components/app-header';

describe("app header", () => {
    let wrapper;
  beforeEach(()=>{
    wrapper = mount(<Router><AppHeader/></Router>);
  });

  it("should exit Link component", () => {
    expect(wrapper.find(Link)).toBeTruthy();

  });


  it("should render '/' path link", () => {
    const LinkItems = wrapper.findWhere(n=> n.prop('to') === '/').length;
    expect(LinkItems).toBe(1);
    expect(wrapper.find(Link)).toBeTruthy();

  });

  it("should render '/help' path link", ()=>{
    const LinkItems = wrapper.findWhere(n=> n.prop('to') === '/help').length;    
    expect(LinkItems).toBe(1);
  });
});