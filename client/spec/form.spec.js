
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Overall from '../components/overall.jsx';
import Reviews from '../components/reviews.jsx';
import App from '../render.jsx';
jest.mock('node-fetch');

import fetch, {Response} from 'node-fetch';

configure({ adapter: new Adapter() });

describe('App component', () => {

  // beforeEach( () => {
  //   App.prototype.componentDidMount = () => {
  //     console.log('hi');
  //   }
  // })
  // const fetch = global.fetch;

  // beforeEach( () => {
  //   let store = createStore(assets);
  //   let a = store.dispatch({
  //     type: Asset,
  //     asset: [{'id': 1, 'title': 'TITLE'}]
  //   });
  //   store.getState().assets = a.assets;

  //   global.fetch = () => {return Promise.resolve('', 200)};

  //   home = TestUtils.renderIntoDocument(<App />)
  // })

  

  test('tests should work', () => {
    expect(true).toBe(true);  
  });

  test('should have one Overall component', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find(Overall)).toHaveLength(1);
  });
  
  test('should have one Reviews component per review - 0 reviews', () => {
    const wrapper = shallow(<App />, {disableLifecycleMethods: true});
    expect(wrapper.find(Reviews)).toHaveLength(0);
  });

  // afterEach( () => {
  //   global.fetch = fetch;
  // });

});
