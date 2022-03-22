import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../../assets/events/blue_celeste_search3.png';
import Pagination from '../../../../Components/Pagination';
import {
  fetchVideos,
  setVideoCurrPage,
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
    <div className="space-y-6  min-h-[150vh] ">
      <img className="w-full h-[300px] " src={img} alt="" />
      <Search className="mt-20 " handleSearch={handleSearch} />
      <h3 className=" py-6 text-center">Available Videos</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  p-6 lg:mx-[100px]">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
      <Pagination
        currPage={currPage}
        setCurrPage={setVideoCurrPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Allvideos;
