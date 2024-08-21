import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route path="/" element={<Auth />} />
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