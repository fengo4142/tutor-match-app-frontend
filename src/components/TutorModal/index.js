import React from 'react'
import moment from 'moment'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Label, Input } from 'reactstrap'

const TutorModal = (props) => {

  const {
    className,
    modal,
    onToggle,
    tutor,
    onSubmit
  } = props;
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target)
    // @ts-ignore
    const payload = Object.fromEntries(formData)
    
    onToggle(tutor)
    onSubmit(payload)
  }

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={onToggle} className={className}>
        <Form onSubmit={onSubmitHandler}>
          <ModalHeader toggle={onToggle}>Tutor</ModalHeader>
          <ModalBody>
            <FormGroup row>
              <Label for="name" sm={3}>Name</Label>
              <Col sm={9}>
                <Input type="text" name="name" id="name" defaultValue={tutor ? tutor.name : '' } placeholder="First Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" sm={3}>Last name</Label>
              <Col sm={9}>
                <Input type="text" name="lastName" id="lastName" defaultValue={tutor ? tutor.lastName : '' } placeholder="Last Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="email" sm={3}>Email</Label>
              <Col sm={9}>
                <Input type="email" name="email" id="email" defaultValue={tutor ? tutor.email : '' } placeholder="Email Address" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="birth" sm={3}>Birth</Label>
              <Col sm={9}>
                <Input type="text" name="birth" id="birth" defaultValue={tutor ? moment(tutor.birth).format('MM/DD/YYYY') : '' } placeholder="Date of Birth" />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" onClick={onToggle}>Close</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default TutorModal;