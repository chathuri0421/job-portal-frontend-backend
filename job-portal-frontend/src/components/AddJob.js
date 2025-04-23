import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddJob() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/jobPosts', job);
      setError(null);
      navigate('/success', { state: job });
    } catch (error) {
      console.error('Error posting job:', error);
      setError('Failed to post job. Please try again.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2>Add a New Job</h2>
        {error && (
          <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="title" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Job Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={job.title}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 12px)', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="description" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              value={job.description}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 12px)', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px', boxSizing: 'border-box', minHeight: '100px' }}
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label htmlFor="location" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#555' }}>
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={job.location}
              onChange={handleChange}
              required
              style={{ width: 'calc(100% - 12px)', padding: '10px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '16px', boxSizing: 'border-box' }}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddJob;