import React from 'react';
import './JobHeader.css';


export default function JobHeader({     
    completed_date,
    date_billed,
    date_paid,
    invoice_number,
    total_paid
}) {

    const jobOrInvoice = completed_date ? "Invoice" : "Job";
    const amountOrPaid = date_paid ? "Amount Paid: " : "Amount Due: ";

    return (
        <div className="job-header">
            <h2>Jerry Janquart &#8212; {jobOrInvoice} #{invoice_number}</h2>
            <p>Graphics / Design / Web Services</p>
            <p className="header">{amountOrPaid}</p>
            <p className="total-amount">${total_paid.toFixed(2)}</p>
        </div>
        )
};


