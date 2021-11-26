import React, { useEffect, useState } from "react";
import './Totals.css';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import jobs from '../App/data.js';



export default function Totals() {
    {/* Bootstrap Modal Code */}
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    {/* Function to Add Arrays */}
    function add(accumulator, a) {
      return accumulator + a;
    }

    {/*  Amount Received & Jobs Paid List */}
    const moneyReceivedArray = [];
    const completedJobsListArray = [];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].date_paid) {
        moneyReceivedArray.push(jobs[i].total_paid());
        completedJobsListArray.push(jobs[i].project);
      }
    }    
    const moneyReceived = moneyReceivedArray.reduce(add, 0);


    {/*  To Be Billed Amount & Unfinished Jobs List */}
    const toBeBilledArray = [];
    const toBeBilledJobsArray = [];
    for (let i = 0; i < jobs.length; i++) {
      if (!jobs[i].completed_date) {
        toBeBilledArray.push(jobs[i].total_paid());
        toBeBilledJobsArray.push(jobs[i].project);
      }
    };
    const toBeBilled = toBeBilledArray.reduce(add, 0);
    

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
          <p className='header'>Amount to Be Billed (Jobs in Progress, {toBeBilledArray.length}): </p>
          <p className='modal-total-amount'>${toBeBilled.toFixed(2)}</p>
          <p className='hours-log'>{toBeBilledJobsArray.join(", ")}</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
