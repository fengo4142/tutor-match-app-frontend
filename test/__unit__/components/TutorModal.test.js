import TutorModal from '../../../src/components/TutorModal';
import React from 'react';
import { shallow } from 'enzyme';

global.Object.fromEntries = jest.fn();
global.FormData = function () {
  this.append = jest.fn();
};

describe('Tutor Modal Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TutorModal />)
  })
  afterEach(() => {
		wrapper.unmount()
	})
    
  it('renders the component without crash', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('has form elements', () => {
    expect(wrapper.find('.form').exists()).toBe(true)
    expect(wrapper.find('[name="name"]').exists()).toBe(true)
    expect(wrapper.find('[name="lastName"]').exists()).toBe(true)
    expect(wrapper.find('[name="email"]').exists()).toBe(true)
    expect(wrapper.find('[name="birth"]').exists()).toBe(true)
    expect(wrapper.find('[type="submit"]').exists()).toBe(true)
  })

  it('submits form', async () => {
    const props = {
      tutor: {
        name: 'Roland',
        lastName: 'Song',
        email: 'rolandsong328@gmail.com',
        birth: '1992-03-28 00:00:00'
      },
      onToggle: jest.fn(),
      onSubmit: jest.fn()
    }
    wrapper.setProps({ ...props })
    const submitEvent = { preventDefault: () => { } }
    const form = wrapper.find('.form')
    await form.simulate('submit', submitEvent)

    expect(props.onToggle).toHaveBeenCalled()
    expect(props.onSubmit).toHaveBeenCalled()
  })
})