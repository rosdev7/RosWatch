import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
  { to: '/client/', text: 'Trang chủ' },
  { to: '/client/contact', text: 'Liên hệ' },
  { to: '/client/about', text: 'Giới thiệu' },
];

const Navbar = () => {
  const handleClassName = ({ isActive }) => {
    return `relative mr-6 py-1 text-[15px] transition-all duration-200 ease-in-out hover:text-accent ${
      isActive
        ? 'font-bold text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-accent after:rounded-full'
        : 'text-white/90'
    }`;
  };

  const renderNavs = () => {
    return navs.map((nav, index) => {
      return (
        <NavLink
          key={index}
          to={nav.to}
          end
          className={handleClassName}
        >
          {nav.text}
        </NavLink>
      );
    });
  };

  return <>{renderNavs()}</>;
};

export default Navbar;
