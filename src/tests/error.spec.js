import React from 'react';
import { shallow } from 'enzyme';
import Error from '../components/error';

describe('Error Component', () => {
    let wrappper;
    beforeEach(()=>{
        wrappper = shallow(<Error/>);
    });

    it("Render Error component heading", () => {
        expect(wrappper.find('h1').text()).toBe('Something went wrong');
    });

    it("should render default '/' link", ()=>{
        const linkItems = wrappper.findWhere(n=> n.prop('to') === '/').length;
        expect(linkItems).toBe(1);
    });
});