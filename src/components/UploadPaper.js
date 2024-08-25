import React, { useState } from 'react';
import { uploadPaper } from '../services/api';
import './UploadPaper.css'; // Importing the CSS file

const UploadPaper = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const paperData = { title, description, category, subject, file };
    await uploadPaper(paperData);
    // Optionally redirect or show a success message
  };

  return (
    <div className="upload-paper-container">
      <h2>Upload Research Paper</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
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
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPaper;
