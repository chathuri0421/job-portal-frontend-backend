import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddJob from './components/AddJob';
import ViewAllJobs from './components/ViewAllJobs';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/viewalljobs" element={<ViewAllJobs />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;