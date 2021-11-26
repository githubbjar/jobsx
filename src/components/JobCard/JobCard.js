import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './JobCard.css';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import HoursBlock1 from '../HoursBlock1/HoursBlock1.js';
import HoursBlock2 from '../HoursBlock2/HoursBlock2.js';
import JobHeader from '../JobHeader/JobHeader.js';
import Footer from '../Footer/Footer.js';
import JobDetails from '../JobDetails/JobDetails.js';
import Thumbnail from '../Thumbnail/Thumbnail.js';
import AddressBlock from '../AddressBlock/AddressBlock.js';

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
                        <HoursBlock1 
                            {...props}
                        />
                    </Col>
                    <Col lg={2}> {/*Hours Log Column*/}
                        <HoursBlock2 
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
