import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table } from 'reactstrap'
import { Link } from 'react-router-dom'

import tutorActions from '../../redux/tutor/actions'
import Button from '../../components/Button'
import GeneralModal from '../../components/GeneralModal'
import TutorModal from '../../components/TutorModal'

import style from './style.module.scss'

const Tutor = () => {
  const [tutor, setTutor] = useState(null)
  const [modal, setModal] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const { tutors } = useSelector(state => state.Tutor)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tutorActions.fetchRequest())
  }, [dispatch])

  const onSubmitTutor = (payload) => {
    if (tutor) {
      dispatch(tutorActions.updateRequest({ ...payload, id: tutor.id }));
    } else {
      dispatch(tutorActions.createRequest(payload));
    }
  }

  const onToggleTutor = (tutor) => {
    setTutor(tutor)
    setModal(!modal)
  }

  const onToggleConfirm = (tutor) => {
    setTutor(tutor)
    setConfirm(!confirm)
  } 

  const onRemoveTutor = () => {
    dispatch(tutorActions.deleteRequest(tutor))
  }

  return (
    <div className={style.root}>
      <div className={style.panel}>
        <Link className={style.link} to="/">&lt; Home</Link>
        <Button className="btn-create" onClick={e => onToggleTutor(null) }>New</Button>
      </div>
      <div className={style.tutors}>
        <Table size="md" className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutors && tutors.map((tutor, index) => {
              return (
                <tr key={tutor.id}>
                  <td>{index + 1}</td>
                  <td>{tutor.name}</td>
                  <td>{tutor.lastName}</td>
                  <td>{tutor.email}</td>
                  <td>
                    <Button className="btn-edit" color="link" onClick={e => onToggleTutor(tutor)}>Edit</Button>
                    <Button className="btn-delete" color="link" onClick={e => onToggleConfirm(tutor)}>Remove</Button>
                  </td>
                </tr>
              )}
            )}
          </tbody>
        </Table>
      </div>

      <TutorModal
        className="tutor-modal"
        modal={modal} 
        tutor={tutor} 
        onToggle={onToggleTutor} 
        onSubmit={onSubmitTutor} />

      <GeneralModal
        className="confirm-modal"
        modal={confirm}
        message="Are you sure to perform this action?"
        title="Confirm"
        onApprove={onRemoveTutor}
        onToggle={onToggleConfirm}
      />
    </div>
  );
};

export default Tutor;
