import React from 'react';
import './Clients.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jobs from '../App/data.js';

export default function Clients() {

    {/* function returns an array of all clients, removing duplicates  */}
    function getClients() {
        let allClients = [];
        for (let i = 0; i < jobs.length; i++) {
            allClients.push(jobs[i].employer);
        };
        return [...new Set(allClients)]
    };
    
    {/* components returns list of dropdown items using getClients function  */}
    return (
      <>  
      {getClients().map(client => (
        <NavDropdown.Item key={client}>{client}</NavDropdown.Item>
      ))}
      </>
    )
}
