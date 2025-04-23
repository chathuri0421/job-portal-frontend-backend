import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
      }}
    >
      <div
        style={{
          margin: '20px 0',
        }}
      >
        <Link
          to="/viewalljobs"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
            display: 'inline-block', // Ensure button-like behavior
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          View All Jobs
        </Link>
      </div>
      <div
        style={{
          margin: '20px 0',
        }}
      >
        <Link
          to="/addjob"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
            display: 'inline-block',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Add Job
        </Link>
      </div>
    </div>
  );
}

export default Home;