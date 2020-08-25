
import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ReactComponent as TutorPhoto } from '../../resources/images/user-photo.svg';

import style from './style.module.scss'

const TutorCard = (props) => {
  return (
    <div>
      <Card className="mx-2">
        <div className={style.photoWrapper}>
          {props.avatar ? <CardImg src={props.avatar} /> : <TutorPhoto className={style.photo} /> }
        </div>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <hr />
          <CardSubtitle>{props.email}</CardSubtitle>
          <CardText>Responsible for helping students to understand different subjects. They assess, assist and encourage the students in the learning processes.</CardText>
          <Button>View Detail</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TutorCard;