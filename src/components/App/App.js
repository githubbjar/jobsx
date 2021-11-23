import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import jobs from './data';
import JobCard from '../JobCard/JobCard.js';

import TopMost from '../TopMost/TopMost.js';


function App() {
  return (
            
            <div class="wrapper">
                    <TopMost />

                    {jobs.slice(0).reverse().map(job => (
                      <JobCard 
                        completed_date={job.completed_date}
                        contact_email={job.contact_email()}
                        contact={job.contact()}
                        date_billed={job.date_billed}
                        date_paid={job.date_paid}
                        due_date={job.due_date}
                        employer={job.employer}
                        employer_address1={job.employer_address1()}
                        employer_address2={job.employer_address2()}
                        hours_logged={job.hours_logged}
                        invoice_number={job.invoice_number}
                        key={job.invoice_number}
                        project={job.project}
                        project_type={job.project_type}
                        rate_of_pay={job.rate_of_pay()}
                        start_date={job.start_date}
                        thumbnail={job.thumbnail}
                        total_hours={job.total_hours()}
                        total_paid={job.total_paid()}
                      />
                    ))}
            </div>
          
  );
}

export default App;
