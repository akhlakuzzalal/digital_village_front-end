import React from 'react';
import AddCard from '../../../../Components/AddCard';
import ExploreBlogs from '../Dashboard/partials/dashboardItem/ExploreBlogs';

const Myblogs = () => {
  return (
    <div>
      {/* Add a post */}
      <AddCard name="Add New Blog" path="/teacherDashboard/addblogs" />
      <ExploreBlogs />
    </div>
  );
};

export default Myblogs;
