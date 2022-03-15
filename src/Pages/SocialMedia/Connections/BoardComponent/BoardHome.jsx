import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allSocialUser } from '../../../../redux/slices/socialSlice/socialSlice';
import SingleUser from './SingleUser';

const BoardHome = () => {
  const allUsers = useSelector((state) => state.social.notFriends);
  const friends = useSelector((state) => state.social.friends);
  const socialUser = useSelector((state) => state.social.user);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allSocialUser(user?.email));
  }, [user]);
  return (
    <div className="space-y-3">
      {/* Suggest */}
      <h3>Suggestion</h3>
      <div className="grid grid-cols-5 gap-6">
        {allUsers.map((user) => (
          <SingleUser key={user._id} user={user} />
        ))}
      </div>
      {/* friends */}
      <h3>Friends</h3>
      {friends && friends.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {friends.map((user) => (
            <SingleUser key={user._id} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>You have No frirnds Yet</h6>
        </div>
      )}
      {/* Requesting */}
      <h3>Requesting</h3>
      {socialUser &&
      socialUser.requesting &&
      socialUser.requesting?.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {friends.map((user) => (
            <SingleUser key={user._id} user={user} />
          ))}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>You are Not Requesting anyone</h6>
        </div>
      )}
      {/* Requested */}
      <h3>Requested</h3>
      {socialUser && socialUser.requested && socialUser.requested.length > 0 ? (
        <div className="grid grid-cols-5 gap-6">
          {friends &&
            friends?.map((user) => <SingleUser key={user._id} user={user} />)}
        </div>
      ) : (
        <div className="flex items-center h-16">
          <h6>No one recently requesting you</h6>
        </div>
      )}
    </div>
  );
};

export default BoardHome;
