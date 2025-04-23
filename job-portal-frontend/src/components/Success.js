import { useLocation, Link } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const job = location.state || {};

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '50px',
      }}
    >
      <div
        style={{
          color: 'green',
          fontSize: '24px',
        }}
      >
        Job Posted Successfully!
      </div>
      <div
        style={{
          margin: '20px auto',
          padding: '20px',
          border: '1px solid #ddd',
          width: '50%',
          textAlign: 'left',
        }}
      >
        <h3>Job Details:</h3>
        <p>
          <strong>Title:</strong> {job.title}
        </p>
        <p>
          <strong>Description:</strong> {job.description}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
      </div>
      <Link
        to="/addjob"
        style={{
          marginRight: '10px',
          color: '#007bff',
          textDecoration: 'none',
        }}
      >
        Post Another Job
      </Link>
      |
      <Link
        to="/"
        style={{
          marginLeft: '10px',
          color: '#007bff',
          textDecoration: 'none',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}

export default Success;