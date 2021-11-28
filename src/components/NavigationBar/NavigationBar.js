import React from 'react';
import './NavigationBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import jobs from '../App/data.js';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import JobNumber from '../JobNumber/JobNumber.js';
import Totals from '../Totals/Totals.js';
import Clients from '../Clients/Clients.js';


export default function NavigationBar() {
    const numOfJobs = "Freelance Jobs (" + jobs.length + ")";

    function getEmployers() {
      let allEmployers = [];
      for (let i = 0; i < jobs.length; i++) {
          allEmployers.push(jobs[i].employer);
      };
      return [...new Set(allEmployers)]
    };
    getEmployers();

    return <div className="top-most-wrapper">
        <Navbar bg="light" expand="lg" fixed="top">
                      <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                            <Nav.Link href="#link">JerryJanquart.com</Nav.Link>
                            <NavDropdown title={numOfJobs} id="basic-nav-dropdown">
                                {jobs.slice(0).reverse().map(job => (
                                    <JobNumber 
                                        key={job.invoice_number} 
                                        completed_date={job.completed_date}
                                        invoice_number={job.invoice_number}
                                        project={job.project}
                                    />
                                ))}
                            </NavDropdown>
                            <NavDropdown title="Clients" id="basic-nav-dropdown">
                              <Clients />
                            </NavDropdown>
                            <Totals />
                          </Nav>
                        </Navbar.Collapse>
                      </Container>
                    </Navbar>  
    </div>
}