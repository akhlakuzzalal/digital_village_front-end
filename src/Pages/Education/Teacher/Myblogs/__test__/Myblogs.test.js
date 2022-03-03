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

// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import { AuthProvider } from '../../../../context/AuthProvider';
// import { persistor, store } from '../../../../redux/store';
// import RegisterTeacher from '../RegisterTeacher';

// const MockRegisterTeacher = () => (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <AuthProvider>
//         <BrowserRouter>
//           <RegisterTeacher />
//         </BrowserRouter>
//       </AuthProvider>
//     </PersistGate>
//   </Provider>
// );

// it('should be able to type an email', () => {
//   render(<MockRegisterTeacher />, () => {
//     const emailInputElement = screen.getByRole('textbox', {
//       type: /email/i,
//     });

//     userEvent.type(emailInputElement, 'user1@gmail.com');
//     expect(emailInputElement.value).toBe('user1@gmail.com');
//   });
// });
