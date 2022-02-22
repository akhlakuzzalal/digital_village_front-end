import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../../Components/Navbar';
// Navbar dynamic
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/#service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'allUser', href: '/allUsers' },
];

const Header = () => {
  const location = useLocation();
  return location.pathname.includes('/teacherDashboard') ||
    location.pathname.includes('/medical') ||
    location.pathname.includes('/marketdashboard') ? null : (
    <Navbar navigation={navigation} />
  );
};

export default Header;
