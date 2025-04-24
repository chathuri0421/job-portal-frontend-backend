import { useState, useEffect } from 'react';
import axios from 'axios';

function ViewAllJobs() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  // Function to handle job deletion
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8080/jobPost/${postId}`); // Fixed endpoint to /jobPost
      setJobs(jobs.filter(job => job.postId !== postId));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  // Function to handle job edit
  const handleEdit = async (job) => {
    try {
      // Prompt user for updated values (in a real app, you'd use a form or modal)
      const updatedTitle = window.prompt('Enter updated title:', job.title) || job.title;
      const updatedDescription = window.prompt('Enter updated description:', job.description) || job.description;
      const updatedLocation = window.prompt('Enter updated location:', job.location) || job.location;

      // Create updated job object
      const updatedJob = {
        postId: job.postId,
        title: updatedTitle,
        description: updatedDescription,
        location: updatedLocation
      };

      // Send PUT request to backend
      const response = await axios.put(`http://localhost:8080/jobPosts/${job.postId}`, updatedJob);
      
      // Update the jobs state with the updated job
      setJobs(jobs.map(j => (j.postId === job.postId ? response.data : j)));
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ margin: '20px auto', width: '80%', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px' }}>Available Job Positions</h2>
      {/* Search Bar */}
      <div style={{ marginBottom: '20px', position: 'relative', width: '50%', margin: '0 auto' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 40px 10px 20px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '20px',
            outline: 'none',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        />
        <span
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '16px',
            color: '#888'
          }}
        >
          🔍
        </span>
      </div>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
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
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <span
                style={{ cursor: 'pointer', fontSize: '16px' }}
                onClick={() => handleEdit(job)}
                title="Edit Job"
              >
                ✏️
              </span>
              <span
                style={{ cursor: 'pointer', fontSize: '16px' }}
                onClick={() => handleDelete(job.postId)}
                title="Delete Job"
              >
                🗑️
              </span>
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