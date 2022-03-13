import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from '../../../../api/axios';
import FavouriteVideoCard from './FavouriteVideoCard/FavouriteVideoCard';

const FavouriteVideos = () => {
  const [favouriteVideos, setFavouriteVideos] = useState([]);
  const uId = useSelector((state) => state.user.uId);

  const handleRemoveFromFavourite = (videoId) => {
    Swal.fire({
      title: 'Are you sure? you want to remove this from favourite.',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
      icon: 'warning',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post('favouriteVideos/remove', { uId, videoId }).then(() => {
          Swal.fire({
            title: 'this video is removed from favourite',
            icon: 'success',
          });
          axios.get(`/favouriteVideos/all/?uId=${uId}`).then((response) => {
            if (response?.data) {
              setFavouriteVideos(response.data.map((res) => res.videoId));
            }
          });
        });
      }
    });
  };

  useEffect(() => {
    axios.get(`/favouriteVideos/all/?uId=${uId}`).then((response) => {
      setFavouriteVideos(response.data.map((res) => res.videoId));
    });
  }, []);

  return (
    <div className="space-y-6">
      <h3 className="text-center py-6">Favourite Videos</h3>
      <div className="flex flex-wrap gap-4 justify-evenly p-6">
        {favouriteVideos.map((video) => (
          <FavouriteVideoCard
            key={video._id}
            video={video}
            handleRemoveFromFavourite={handleRemoveFromFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteVideos;
