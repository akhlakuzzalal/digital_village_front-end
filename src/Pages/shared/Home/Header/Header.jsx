import React from 'react';
import Navbar from '../../../../components/Navbar';
// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
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
