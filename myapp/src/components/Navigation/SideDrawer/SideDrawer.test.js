import React from 'react'


import {configure,shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SideDrawer from './SideDrawer'
import NavigationItem from '../Navigationitem/Navigationitem'

configure({adapter:new Adapter()});

describe('<NavigationItems/>',()=>{
    
    it('should render navigation',()=>{
        const wrapper=shallow(<NavigationItems/>);
         expect(wrapper.find(NavigationItem)).toHaveLength(3)
       
    })
})