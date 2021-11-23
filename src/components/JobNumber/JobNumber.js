import React from 'react';
import './JobNumber.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function JobNumber({ completed_date, invoice_number, project }) {
    const workingUrl = "#" + invoice_number;
    let checkedBox = "";
    if (!completed_date) {
        checkedBox = <FontAwesomeIcon icon={faCheckSquare} />;
    };
    return (
        <NavDropdown.Item href={workingUrl}>#{invoice_number} &#8212; {checkedBox} {project}</NavDropdown.Item>
    )
}