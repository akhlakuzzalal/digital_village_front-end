import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { MdClose, MdEditNotifications, MdMenuOpen } from 'react-icons/md';
import logo from './../../../../assets/logo.png';

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerBgWhite, setHeaderBgWhite] = useState(false);
  //header change function
  const onChangeHeader = () => {
    let scrollTop =
      window.pageYOff || window.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      if (scrollTop === 0) {
        setHeaderBgWhite(false);
      }
      setChangeHeader(true);
      setLastScrollTop(scrollTop);
    } else if (scrollTop < lastScrollTop) {
      if (scrollTop === 0) {
        setHeaderBgWhite(false);
      }
      setChangeHeader(false);
    } else {
      setChangeHeader(false);
      setLastScrollTop(scrollTop);
      setHeaderBgWhite(true);
    }
  };
  // Navbar dynamice
  const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Blogs', href: '/testimonial' },
    { name: 'Contact', href: '/contact' },
  ];
  //change header by scrolling
  window.addEventListener('scroll', onChangeHeader);

  return (
    <>
      <header
        className={`
          ${
            changeHeader
              ? '-mt-32 fixed z-50 top-0 left-0 w-full shadow-md'
              : 'mt-0 fixed z-50 top-0 left-0 w-full'
          } ${headerBgWhite ? 'bg-white' : 'bg-transparent'}`}
      >
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6 py-3">
          {/* left logo */}
          <div className="flex grow md:grow-0 items-center justify-start order-1">
            <img className="w-16 cursor-pointer" src={logo} alt="logo" />
          </div>

          {/* center */}
          <div className="flex items-center justify-center order-4 md:order-2">
            <Popover>
              <div className="-mr-2 flex items-center justify-end md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  <MdMenuOpen className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Transition
                as={Fragment}
                enter="duration-2500 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-2000 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-center md:hidden "
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                          <span className="sr-only">Close main menu</span>
                          <MdClose className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
              {/* lg show */}
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-green-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover>
          </div>

          {/* right */}
          <div className="flex order-3 mr-6">
            <>
              <div className="flex items-center justify-center space-x-3 mx-3">
                <div className="relative flex cursor-pointer">
                  <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-1 -top-1">
                    2
                  </span>
                  <MdEditNotifications
                    size={40}
                    className="cursor-pointer text-primary"
                  />
                </div>
              </div>
            </>

            <>
              <div className="flex items-center justify-end space-x-6">
                {/* <button className="poppins">Sign In</button> */}
                <button className=" bg-primary px-6 py-3 text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
                  Sign Up
                </button>
              </div>
            </>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
