import React from 'react';
import Navbar from '../../../../components/Navbar';
// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/service' },
  { name: 'Blogs', href: '/testimonial' },
  { name: 'Contact', href: '/contact' },
];
const Header = () => {
  return (
    <div>
      <Navbar navigation={navigation} />
    </div>
  );
};

export default Header;
