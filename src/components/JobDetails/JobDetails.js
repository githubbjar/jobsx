import React from 'react';
import './JobDetails.css';

export default function JobDetails ({ completed_date, project, project_type, start_date, due_date }) {
    return (
        <div className="job-details">
            <h2><strong>{project}</strong></h2>
            <p class="header">Project Type:</p>
            <p class="details">{project_type}</p>
            <p class="header">Start Date / Due Date:</p>
            <p class="details">{start_date} / {due_date}</p>
            <p class="header">Completed Date:</p>
            <p class="details">{completed_date}</p>
        </div>
    )
};