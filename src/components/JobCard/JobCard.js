import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './JobCard.css';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import HoursLogCard from '../HoursLogCard/HoursLogCard.js';
import HoursLogCard2 from '../HoursLogCard2/HoursLogCard2.js';
import JobHeader from '../JobHeader/JobHeader.js';
import Footer from '../Footer/Footer.js';
import JobDetails from '../JobDetails/JobDetails.js';
import Thumbnail from '../Thumbnail/Thumbnail.js';
import BillToCard from '../BillToCard/BillToCard.js';

export default function JobCard({ ...props }) {

    return (
        <div className="job-card">
            
            <Container id="progress-bar"> {/*First Row*/}
                <Row className="top">
                    <ProgressBar 
                        {...props}
                    />
                </Row>
            </Container>
            <Container id="content"> {/*Second Row*/}
                <Row>
                    <Col lg={8}>
                        <Container>
                            <Row>
                                <Col><JobHeader 
                                        {...props}
                                    />
                                    </Col>
                            </Row>
                            <Row>
                                <Col lg={3}>
                                    <Thumbnail 
                                        {...props}
                                    />
                                </Col>
                                <Col lg={5}>
                                    <JobDetails 
                                        {...props}
                                    />
                                </Col>
                                <Col lg={4}>
                                    <AddressBlock 
                                        {...props}
                                    />
                                </Col>    
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={2}> {/*Hours Log Column*/}
                        <HoursLogCard 
                            {...props}
                        />
                    </Col>
                    <Col lg={2}> {/*Hours Log Column*/}
                        <HoursLogCard2 
                                {...props}
                            />
                    </Col> 
                </Row>
            </Container>
            <Container id="footer-bar"> {/*Third Row*/}
                <Row>
                    <Col>
                        <Footer 
                            {...props}
                        />
                    </Col>
                </Row>
            </Container>            
        </div>     
    )
};
