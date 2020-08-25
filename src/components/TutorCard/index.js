
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ReactComponent as TutorPhoto } from 'resources/images/user-photo.svg';

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
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>View Detail</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TutorCard;