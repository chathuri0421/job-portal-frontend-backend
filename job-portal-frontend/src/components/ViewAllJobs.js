import { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAllJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/jobPosts');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div style={{ margin: '20px auto', width: '80%', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px' }}>Available Job Positions</h2>
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ fontSize: '14px', color: '#888', marginBottom: '8px' }}>
            Job ID: {job.postId}

            </div>
            <div style={{ fontSize: '20px', color: '#333', marginBottom: '10px' }}>
              {job.title}
            </div>
            <div style={{ color: '#666', fontStyle: 'italic', marginBottom: '10px' }}>
              Location: {job.location}
            </div>
            <div style={{ color: '#444', lineHeight: '1.6' }}>
              {job.description}
            </div>
          </div>
        ))
      ) : (
        <div
          style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#666',
            marginTop: '50px'
          }}
        >
          No job positions available at the moment.
        </div>
      )}
    </div>
  );
}

export default ViewAllJobs;
