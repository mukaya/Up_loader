import React from 'react';
import FileUpload from './components/FileUpload'
import './App.css';

const App = ()=> {
  return (
    <div className="container mt-4">
      <h6 className="display-4 text-center mb-4">
        <i className="fab fa-react" />
        React File Upload
      </h6>
      <FileUpload />
    </div>
  );
}

export default App;
