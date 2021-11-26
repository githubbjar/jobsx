import React from 'react';
import { Col } from 'react-bootstrap';

import './HoursBlock2.css';

export default function HoursBlock2({ hours_logged }) {
    return(
    
        <Col>
            <div className="hours-log-wrapper">
            {hours_logged[5] && <p className="header">continued... </p>}
                {hours_logged.slice(5, 20).map(({ Date, Hours, Note }) => (
                    <p key={Date} className="hours-log">{Date}, {Hours} Hours<br /><em>&#8226; {Note}</em></p>
                ))}
            </div>
        </Col>
    
    )
}