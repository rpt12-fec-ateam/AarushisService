
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Overall from '../components/overall.jsx';
import Reviews from '../components/reviews.jsx';
import Stars from '../components/stars.jsx';
import App from '../render.jsx';
jest.mock('node-fetch');

import fetch, {Response} from 'node-fetch';

configure({ adapter: new Adapter() });

describe('App component', () => {

  test('should have one Overall component', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    wrapper.setState({items: [{name: 'Barbara', price: 5}]});
    expect(wrapper.find(Overall)).toHaveLength(1);
  });
  
  test('should have one Reviews component per review - 0 reviews', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find(Reviews)).toHaveLength(0);
  });

  test('should have one Reviews component per review - 1 review', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    wrapper.setState({reviews: [{name: 'Barbara', rating: 5}]})
    expect(wrapper.find(Reviews)).toHaveLength(1);
  });

  test('should have one Reviews component per review - 5 reviews', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    const reviews = [{name: 'Barbara', rating: 5}, {name: 'Snoop', rating: 3}, {name: 'Katy', rating: 2}, {name: 'Orlando', rating: 1}, {name: 'Connie', rating: 5}];
    wrapper.setState({reviews: reviews});
    expect(wrapper.find(Reviews)).toHaveLength(5);
  });

});
