import React from 'react';
import BlogCard from './BlogCard/BlogCard';

const blogs = [
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
];

const Myblogs = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Myblogs;
