import React, { useState } from 'react';
import axios from 'axios';

const PhotoUploadForm = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://localhost:3001/api/multer/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setSuccessMessage('User Added');
      setErrorMessage('');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setErrorMessage('Error: ' + (error.response?.data || error.message));
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Photo Upload</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/jpeg, image/jpg, image/png" onChange={handleFileChange} required />
        <br />
        <button type="submit">Upload</button>
      </form>
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default PhotoUploadForm;
