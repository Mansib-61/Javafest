import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import Home component
import Auth from './components/Auth';
import PaperList from './components/PaperList';
import UploadPaper from './components/UploadPaper';
import ReviewPaper from './components/ReviewPaper';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/papers" element={<PaperList />} />
          <Route path="/upload" element={<UploadPaper />} />
          <Route path="/review" element={<ReviewPaper />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
