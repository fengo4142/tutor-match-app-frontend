import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import tutorActions from 'redux/tutor/actions'

import TutorCard from 'components/TutorCard'
import GetStartedSection from 'components/GetStartedSection'

import style from './style.module.scss'

const Home = () => {
  const history = useHistory()
  const {tutors} = useSelector(state => state.Tutor)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tutorActions.fetchRequest())
  }, [dispatch])
  
  return (
    <div>
      <GetStartedSection onStart={() => history.push('/tutor')} />
      <div className={style.tutors}>
        {tutors &&  tutors.map(tutor => <TutorCard key={tutor.id} {...tutor} /> )}
      </div>
    </div>
  );
};

export default Home;
