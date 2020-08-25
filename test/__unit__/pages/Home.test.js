import Home from '../../../src/pages/Home';
import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux'

const spySelector = jest.spyOn(redux, 'useSelector')
spySelector.mockReturnValue({ tutors: [] })

const spyDispatch = jest.spyOn(redux, 'useDispatch')
spyDispatch.mockReturnValue({ fetchRequest: jest.fn() })

describe('Home Page Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />)
  })

  afterEach(() => {
		wrapper.unmount()
	})
      
  it('renders the component without crash', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})