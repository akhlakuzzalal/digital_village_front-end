import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname.includes('/teacherDashboard') ? null : (
    <Navbar navigation={navigation} />
  );
};

export default Header;
