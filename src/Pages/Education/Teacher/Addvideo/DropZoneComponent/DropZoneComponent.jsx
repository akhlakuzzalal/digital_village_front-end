import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from '../../../../../api/axios';

const DropzoneComponent = () => {
  const [file, setFile] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles[0]);
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    console.log(file);

    const response = await axios.post('/teacher/uploadVideo', formData);
    console.log(response.data);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>
        Drag and drop your images here. <p>{file.name}</p>
      </div>

      <input
        onClick={() => handleUpload()}
        className="btn bg-success cursor-pointer"
        type="submit"
        value="upload"
      />
    </div>
  );
};

export default DropzoneComponent;
