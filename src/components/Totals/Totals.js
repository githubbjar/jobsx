import React, { useState } from "react";
import './Totals.css';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import jobs from '../App/data.js';



export default function Totals() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function add(accumulator, a) {
      return accumulator + a;
    }

    const moneyReceivedArray = [];
    const completedJobsListArray = [];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].date_paid) {
        moneyReceivedArray.push(jobs[i].total_paid());
        completedJobsListArray.push(jobs[i].project);
      }
    }    
    const moneyReceived = moneyReceivedArray.reduce(add, 0);


    const toBeBilledArray = [];
    const toBeBilledJobsArray = [];
    for (let i = 0; i < jobs.length; i++) {
      if (!jobs[i].completed_date) {
        toBeBilledArray.push(jobs[i].total_paid());
        toBeBilledJobsArray.push(jobs[i].project);
      }
    };
    const toBeBilled = toBeBilledArray.reduce(add, 0);
    

    const billedNotPaidArray = [];
    const billedNotPaidJobsArray = [];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].date_billed && !jobs[i].date_paid) {
        billedNotPaidArray.push(jobs[i].total_paid());
        billedNotPaidJobsArray.push(jobs[i].project);
      }
    }
    const billedNotPaid = billedNotPaidArray.reduce(add, 0);


  return (
    <div id="totals">
      <Nav.Link onClick={handleShow}>Totals</Nav.Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2>Amounts&#8212;{jobs.length} Jobs</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='header'>Amount Received (Closed Jobs, {completedJobsListArray.length}): </p>
          <p className='modal-total-amount'>${moneyReceived.toFixed(2)}</p>
          <p className='hours-log'>{completedJobsListArray.join(", ")}</p>
          <hr />
          <p className='header'>Amount Billed (Completed Jobs, {billedNotPaidArray.length}): </p>
          <p className='modal-total-amount'>${billedNotPaid.toFixed(2)}</p>
          <p className='hours-log'>{billedNotPaidJobsArray.join(", ")}</p>
          <hr />
          <p className='header'>Amount to Be Billed (Jobs in Progress, {toBeBilledArray.length}): </p>
          <p className='modal-total-amount'>${toBeBilled.toFixed(2)}</p>
          <p className='hours-log'>{toBeBilledJobsArray.join(", ")}</p>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
