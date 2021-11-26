import React from 'react';
import './AddressBlock.css';

export default function BillToCard({ contact, contact_email, employer, employer_address1, employer_address2 }) {
    return (
        <div className="bill-to-card">
            <p className="header">Bill to:</p>
            <p className="details">{employer}</p>
            <p className="address">{employer_address1}</p>
            <p className="address">{employer_address2}</p>
            <p className="address">{contact}</p>
            <p className="address">{contact_email}<br /><br /><br /></p>
            
            <p className="header">Pay to:</p>
            <p className="details">Jerry Janquart</p>
            <p className="address">10438 Red Oak Drive</p>
            <p className="address">Saint John, IN 46373</p>
            <p className="address">jmjanquart@gmail.com</p>
        </div>
    )
}