import React, { useCallback, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from '../api/axios';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#222',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const FileUpload = ({ apiEndPoint }) => {
  const [file, setFile] = useState({});
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(apiEndPoint, formData);
    console.log(response.data);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section className="max-w-[600px]">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your file or Click to select</div>
        <h3 className="text-success text-lg">{file.name}</h3>
      </div>
      <div className="flex justify-center">
        <input
          onClick={() => handleUpload()}
          className="btn bg-success hover:bg-opacity-70 transition-all duration-300 cursor-pointer"
          type="submit"
          value="upload"
        />
      </div>
    </section>
  );
};

export default FileUpload;
