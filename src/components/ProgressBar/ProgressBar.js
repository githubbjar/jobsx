import React from 'react';
import './ProgressBar.css';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export default function ProgressBar({     
    completed_date,
    date_billed, 
    date_paid, 
    invoice_number,
    start_date 
}) {
    
    //colors progress bar and determines column number and status
    let progressBarColor = "";
    let columns = "";
    if (start_date) {
        progressBarColor = "blue";
        columns = <><Col lg={3} className={progressBarColor}></Col>
                <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Start: {start_date}</p></Col>
                <Col lg={3} className={progressBarColor}><p>. . . In Progress</p></Col>
                <Col lg={3} className={progressBarColor}></Col></>;
    };
    if (start_date && completed_date) {
        progressBarColor = "red";
        columns = <><Col lg={4} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Start: {start_date}</p></Col>
                  <Col lg={4} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Finish: {completed_date}</p></Col>
                  <Col lg={4} className={progressBarColor}><p>. . . Need to Bill</p></Col></>;
    };
    if (start_date && completed_date && date_billed) {
        progressBarColor = "yellow";
        columns = <><Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Start: {start_date}</p></Col>
                  <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Finish: {completed_date}</p></Col>
                  <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Billed: {date_billed}</p></Col>
                  <Col lg={3} className={progressBarColor}><p>. . . Awaiting Payment</p></Col></>;
    } 
    if (start_date && completed_date && date_billed && date_paid) {
        progressBarColor = "green";
        columns = <><Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Start: {start_date}</p></Col>
        <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Finish: {completed_date}</p></Col>
        <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Billed: {date_billed}</p></Col>
        <Col lg={3} className={progressBarColor}><p><FontAwesomeIcon icon={faCheckSquare} /> Paid: {date_paid}</p></Col></>;
    };
    
    return (
            <>
            
                <a name={invoice_number}></a>
                <div className="special-margin"></div>
                {columns}
            </>
    )
};
