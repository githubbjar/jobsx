import React from 'react';
import './Clients.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jobs from '../App/data.js';

export default function Clients() {

    function getClients() {
        let allClients = [];
        for (let i = 0; i < jobs.length; i++) {
            allClients.push(jobs[i].employer);
        };
        return [...new Set(allClients)]
    };
    
    return (
      <>  
      {getClients().map(client => (
        <NavDropdown.Item key={client}>{client}</NavDropdown.Item>
      ))}
      </>
    )
}
