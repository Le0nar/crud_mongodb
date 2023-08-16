import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    var data = new FormData()
    data.append('file', file)
    
    fetch('http://localhost:4000/file', {
      method: 'POST',
      body: data
    })
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />

      <div>{file && `${file.name} - ${file.type}`}</div>

      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}

export default App;
