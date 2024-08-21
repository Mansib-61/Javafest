import React, { useState, useEffect } from 'react';
import { getPapers } from '../services/api';

const PaperList = () => {
  const [papers, setPapers] = useState([]);
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const fetchPapers = async () => {
      const response = await getPapers(category, subject);
      setPapers(response.data);
    };
    fetchPapers();
  }, [category, subject]);

  return (
    <div className="paper-list-container">
      <h2>Research Papers</h2>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <ul>
        {papers.map((paper) => (
          <li key={paper.id}>
            <h3>{paper.title}</h3>
            <p>{paper.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaperList;
