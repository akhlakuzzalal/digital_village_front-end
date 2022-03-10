import React, { useEffect, useState } from 'react';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import axios from '../../../../api/axios';

function LikeDislikes({ video, videoId, commentId, uId }) {
  const [Likes, setLikes] = useState(0);
  const [Dislikes, setDislikes] = useState(0);
  const [LikeAction, setLikeAction] = useState(null);
  const [DislikeAction, setDislikeAction] = useState(null);

  let data = {};

  if (video) {
    data = { videoId, uId };
  } else {
    data = { commentId, uId };
  }

  useEffect(() => {
    axios.post('/videoLike/getAll', data).then((response) => {
      console.log('get all video likes', response.data);

      if (response.data.success) {
        //How many likes does this video or comment have
        setLikes(response.data.videoLikes.length);

        //if I already click this like button or not
        response.data.videoLikes.map((like) => {
          if (like.uId === uId) {
            setLikeAction('liked');
          }
        });
      } else {
        alert('Failed to get likes');
      }
    });

    axios.post('/videoDisLike/getAll', data).then((response) => {
      console.log('get all video dislike', response.data);
      if (response.data.success) {
        //How many likes does this video or comment have
        setDislikes(response.data.videoDisLikes.length);

        //if I already click this like button or not
        response.data.videoDisLikes.map((dislike) => {
          if (dislike.uId === uId) {
            setDislikeAction('disliked');
          }
        });
      } else {
        alert('Failed to get dislikes');
      }
    });
  }, []);

  const onLike = () => {
    if (LikeAction === null) {
      axios.post('/videoLike/add', data).then((response) => {
        if (response.data.success) {
          setLikes(Likes + 1);
          setLikeAction('liked');

          //If dislike button is already clicked

          if (DislikeAction !== null) {
            setDislikeAction(null);
            setDislikes(Dislikes - 1);
          }
        } else {
          alert('Failed to increase the like');
        }
      });
    } else {
      axios.post('/videoLike/remove', data).then((response) => {
        if (response.data.success) {
          setLikes(Likes - 1);
          setLikeAction(null);
        } else {
          alert('Failed to decrease the like');
        }
      });
    }
  };

  const onDisLike = () => {
    if (DislikeAction === null) {
      axios.post('/videoDisLike/add', data).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes + 1);
          setDislikeAction('disliked');

          // if dislike button is already clicked
          if (LikeAction !== null) {
            setLikeAction(null);
            setLikes(Likes - 1);
          }
        } else {
          alert('Failed to increase dislike');
        }
      });
    } else {
      axios.post('/videoDisLike/remove', data).then((response) => {
        if (response.data.success) {
          setDislikes(Dislikes - 1);
          setDislikeAction(null);
        } else {
          alert('Failed to decrease dislike');
        }
      });
    }
  };

  return (
    <>
      {/* like button */}
      <div className="flex space-x-3 items-center">
        {LikeAction === 'liked' ? (
          <AiFillLike size={30} className="cursor-pointer" onClick={onLike} />
        ) : (
          <AiOutlineLike
            size={30}
            className="cursor-pointer"
            onClick={onLike}
          />
        )}
        <div className="cursor-auto">{Likes}</div>
      </div>

      {/* dislike button */}
      <div className="flex space-x-3 items-center">
        {DislikeAction === 'disliked' ? (
          <AiFillDislike
            size={30}
            className="cursor-pointer"
            onClick={onDisLike}
          />
        ) : (
          <AiOutlineDislike
            size={30}
            className="cursor-pointer"
            onClick={onDisLike}
          />
        )}
        <div className="cursor-auto">{Dislikes}</div>
      </div>
    </>
  );
}

export default LikeDislikes;
