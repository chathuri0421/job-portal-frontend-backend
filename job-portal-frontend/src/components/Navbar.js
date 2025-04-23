import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #ddd',
      }}
    >
      <div
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Telusko Job Portal Web App
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px', // Replaces margin-left for spacing between links
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#007bff',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0056b3')}
          onMouseOut={(e) => (e.target.style.color = '#007bff')}
        >
          Home
        </Link>
        <Link
          to="/viewalljobs"
          style={{
            textDecoration: 'none',
            color: '#007bff',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0056b3')}
          onMouseOut={(e) => (e.target.style.color = '#007bff')}
        >
          All Jobs
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: 'none',
            color: '#007bff',
          }}
          onMouseOver={(e) => (e.target.style.color = '#0056b3')}
          onMouseOut={(e) => (e.target.style.color = '#007bff')}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;