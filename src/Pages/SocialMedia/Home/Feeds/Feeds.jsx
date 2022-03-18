import React, { useEffect, useState } from 'react';
import axios from '../../../../api/axios';
import SingleFeed from './SingleFeed';

const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [users, setUsers] = useState([]);
  console.log(feeds);
  useEffect(() => {
    axios.get('/social/allPost').then((res) => setFeeds(res.data));
    axios.get('/social/usersofMedia').then((res) => setUsers(res.data));
  }, []);
  return (
    <div className="space-y-4">
      {/* users post */}
      {feeds.map((feed) => (
        <SingleFeed feed={feed} key={feed._id} users={users} />
      ))}
    </div>
  );
};

export default Feeds;
