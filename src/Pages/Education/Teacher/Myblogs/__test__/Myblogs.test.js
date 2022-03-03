import { render, screen } from '@testing-library/react';
import BlogCard from '../BlogCard/BlogCard';
import Myblogs from '../Myblogs';

const blog = {
  _id: 1,
  name: 'Digital Marketing',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corporis porro inventore unde voluptatibus autem eius officiis? Nulla, est reprehenderit?',
  img: 'https://leverageedu.com/blog/wp-content/uploads/2020/06/Types-of-Digital-Marketing.png',
};

it('expecting a div in my blog component', () => {
  render(<Myblogs />);
  const articleElement = screen.getByRole('article');
  expect(articleElement).toBeInTheDocument();
});

it("'Digital Marketing' should be available", () => {
  render(<BlogCard blog={blog} />);
  const isAvailable = screen.getByText(/digital marketing/i);

  expect(isAvailable).toBeInTheDocument();
});
