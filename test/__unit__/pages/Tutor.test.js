import Tutor from '../../../src/pages/Tutor';
import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux'

const tutors = [{
  id: 1,
  name: 'Roland',
  lastName: 'Song',
  email: 'rolandsong328@gmail.com',
  birth: '1992-03-28 00:00:00'  
}]

const spySelector = jest.spyOn(redux, 'useSelector')
spySelector.mockReturnValue({ tutors })

const spyDispatch = jest.spyOn(redux, 'useDispatch')
spyDispatch.mockReturnValue({ fetchRequest: jest.fn() })

describe('Tutor Page Component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tutor />)
  })

  afterEach(() => {
		wrapper.unmount()
	})
      
  it('renders the component without crash', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('has table and button elements', () => {
    expect(wrapper.find('.table').exists()).toBe(true)
    expect(wrapper.find('.btn-create').exists()).toBe(true)
    expect(wrapper.find('.btn-edit').exists()).toBe(true)
    expect(wrapper.find('.btn-delete').exists()).toBe(true)
  })

  it('shows modal when clicking new button', async () => {
    const createBtn = wrapper.find('.btn-create')
    await createBtn.simulate('click')

    const tutorModal = wrapper.find('.tutor-modal')
    expect(tutorModal.prop('modal')).toBe(true)
  })

  it('shows again the modal with data when clicking edit button', async () => {
    const editBtn = wrapper.find('.btn-edit')
    await editBtn.simulate('click')

    const tutorModal = wrapper.find('.tutor-modal')
    expect(tutorModal.prop('modal')).toBe(true)
    expect(tutorModal.prop('tutor')).toBeTruthy()
  })

  it('shows again the modal with data when clicking edit button', async () => {
    const delBtn = wrapper.find('.btn-delete')
    await delBtn.simulate('click')

    const confirmModal = wrapper.find('.confirm-modal')
    expect(confirmModal.prop('modal')).toBe(true)
  })

})