import React from "react";
import { Jumbotron, Button } from 'reactstrap';

import style from './style.module.scss';

const GetStartedSection = (props) => {
  const { onStart } = props;

  return (
    <div>
      <Jumbotron className={style.jumbotron}>
        <div className="my-5">
          <h3 className="display-5">Find out who can help you take your education to the next level</h3>
          <p className="lead">The place where students and tutors meet.</p>
        </div>
        <p className="lead">
          <Button color="primary" onClick={onStart}>Get started Now</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default GetStartedSection;

