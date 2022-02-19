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
  return location.pathname.includes('/teacherDashboard') ||
    location.pathname.includes('/medical') ? null : (
    <Navbar navigation={navigation} />
  );
};

export default Header;
