import React from 'react';
import FileUpload from '../../../../Components/FileUpload';

const Addvideo = () => {
  return (
    <div>
      <FileUpload apiEndPoint="/teacher/uploadVideo" />
    </div>
  );
};

export default Addvideo;
