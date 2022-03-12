import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../../../Components/Pagination';
import {
  fetchVideos,
  setCurrPage,
} from '../../../../redux/slices/video/videoSlice';
import Search from '../Search/Search';
import VideoCard from './VideoCard/VideoCard';

const Allvideos = () => {
  const pageCount = useSelector((state) => state.videos.pageCount);
  const currPage = useSelector((state) => state.videos.currPage);
  const videos = useSelector((state) => state.videos.videos);
  const size = 10;
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchVideos({
        pageCount,
        currPage,
        size,
        search,
      })
    );
  }, [currPage, pageCount, size, search]);

  const handleSearch = (data) => {
    if (currPage > 0) {
      setSearch(data.search);
    } else {
      setSearch(data.search);
    }
  };

  return (
    <div className="space-y-6">
      <Search handleSearch={handleSearch} />
      <h3 className="text-center py-6">Available Videos</h3>
      <div className="flex flex-wrap gap-4 justify-evenly p-6">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      <Pagination
        currPage={currPage}
        setCurrPage={setCurrPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Allvideos;
