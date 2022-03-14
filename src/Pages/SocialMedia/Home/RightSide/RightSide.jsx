import React from 'react';

const RightSide = () => {
  const friends = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="mt-10 space-y-6 h-[calc(100vh-80px)] overflow-y-scroll">
      {/* latest Feed */}
      <div className="shadow-xl rounded-lg px-4 py-2 w-11/12 mx-auto">
        <img
          className="w-full h-36"
          src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg"
          alt=""
        />
        <p>Heading of the Post</p>
        <div className="flex items-center">
          {/* Avatar */}
          <div class="mr-2 w-7 h-7 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
            <img
              src="http://source.unsplash.com/100x100/?woman"
              className="rounded-full"
              alt=""
            />
            <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
          </div>
          <p>User Name</p>
        </div>
      </div>
      {/* Active Friends */}
      <div className="space-y-4 ml-10 border-t-2 border-slate-800">
        <h6>Active Connections</h6>
        {friends.map((friend) => (
          <div className="flex items-center cursor-pointer">
            {/* Avatar */}
            <div class="mr-2 w-7 h-7 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
              <img
                src="http://source.unsplash.com/100x100/?woman"
                className="rounded-full"
                alt=""
              />
              <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-600"></div>
            </div>
            <p>User Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
