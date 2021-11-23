import React from 'react';
import { Col } from 'react-bootstrap';

import './HoursLogCard.css';

export default function HoursLogCard({ hours_logged, total_hours, rate_of_pay }) {
    return(
    
        <Col>
            <div className="hours-log-wrapper">
                <p class="header">Time On Project:</p>
                <p class="details">{total_hours} hours</p>
                <p class="header">Rate of Pay:</p>
                <p class="details">${rate_of_pay} / hour</p>
                <p className="header">Hours Log: </p>

                {hours_logged.slice(0, 5).map(({ Date, Hours, Note }) => (
                    <p key={Date} className="hours-log">{Date}, {Hours} Hours<br /><em>&#8226; {Note}</em></p>
                ))}
            </div>
        </Col>
    
    )
}