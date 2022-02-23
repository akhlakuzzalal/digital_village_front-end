import React, { useEffect, useState } from 'react';
import axios from '../../../../api/axios';

const Addvideo = () => {
  const [file, setFile] = useState('');
  const [videos, setVideos] = useState([]);

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    await axios.post('/teacher/uploadVideo', formData);
    axios.get('/teacher/allVideo').then((res) => setVideos(res.data));
  };

  useEffect(() => {
    axios.get('/teacher/allVideo').then((res) => setVideos(res.data));
    console.log(videos);
  }, []);

  return (
    <div>
      <input type="file" onChange={fileChange} />
      <input
        className="btn bg-success cursor-pointer"
        type="submit"
        value="upload"
        onClick={() => handleUpload()}
      />
      <div className="flex items-center">
        {videos.map((video) => (
          <img
            className="w-36"
            key={video._id}
            src={`http://localhost:5000/${video.videoPath}`}
            alt={video.videoName}
          />
        ))}
      </div>
    </div>
  );
};

export default Addvideo;
