import React, { useEffect, useState } from "react";
import './Totals.css';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import jobs from '../App/data.js';



export default function Totals() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const completedJobsAmountArray = jobs.map (function (job) {return job.total_paid();});
    function add(accumulator, a) {
        return accumulator + a;
    }
    const sum = completedJobsAmountArray.reduce(add, 0);

  return (
    <>
              <Nav.Link onClick={handleShow}>Totals</Nav.Link>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Totals</Modal.Title>
        </Modal.Header>
        <Modal.Body>Total Amount: ${sum.toFixed(2)}</Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
