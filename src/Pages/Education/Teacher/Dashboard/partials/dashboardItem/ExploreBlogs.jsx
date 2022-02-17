import React, { useState } from 'react';
import SingleBlog from './SingleBlog';

const ExploreBlogs = () => {
  const [blogs, setBlogs] = useState([
    {
      _id: 1,
      name: 'Microsoft word',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
      img: 'https://www.versionmuseum.com/images/applications/microsoft-word/microsoft-word%5E2015%5Ems-word-logo-new.png',
    },
    {
      _id: 2,
      name: 'Marchendising',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
      img: 'https://static.fibre2fashion.com/articleresources/images/51/5070/differentiating-edge-merchandising-as-centre-of-excellence.jpg',
    },
    {
      _id: 3,
      name: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
      img: 'https://leverageedu.com/blog/wp-content/uploads/2020/06/Types-of-Digital-Marketing.png',
    },
  ]);
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((item) => {
          return <SingleBlog key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ExploreBlogs;
