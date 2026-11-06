import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { BiArrowFromLeft } from 'react-icons/bi';
import Navbar from './Navbar';
import { AiOutlineUser, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { setCountCart } from '../../utils/counterCartSlice';
import requestHandler from '../../utils/requestHandle';

const menuAvatar = [{ to: '/client/profile', text: 'Tài khoản' }];

// Logo đồng hồ dạng SVG (tự vẽ, không dùng file ảnh)
const BrandMark = () => (
  <svg
    viewBox='0 0 48 48'
    className='w-11 h-11'
    aria-hidden='true'
  >
    <circle cx='24' cy='24' r='22' fill='none' stroke='#c6a15b' strokeWidth='2' />
    <circle cx='24' cy='24' r='17' fill='none' stroke='#c6a15b' strokeWidth='1' opacity='0.5' />
    {/* vạch giờ 12-3-6-9 */}
    <rect x='23' y='9' width='2' height='4' rx='1' fill='#c6a15b' />
    <rect x='35' y='23' width='4' height='2' rx='1' fill='#c6a15b' />
    <rect x='23' y='35' width='2' height='4' rx='1' fill='#c6a15b' />
    <rect x='9' y='23' width='4' height='2' rx='1' fill='#c6a15b' />
    {/* kim đồng hồ */}
    <line x1='24' y1='24' x2='24' y2='15' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' />
    <line x1='24' y1='24' x2='31' y2='27' stroke='#ffffff' strokeWidth='2' strokeLinecap='round' />
    <circle cx='24' cy='24' r='2' fill='#c6a15b' />
  </svg>
);

const Header = () => {
  const [isHoveredAvatar, setIsHoveredAvatar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const counterCart = useSelector((state) => state.counterCart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    token && setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchCountCart = async () => {
      try {
        const response = await requestHandler.get('cart/');
        const carts = response?.data?.data;
        const count = Array.isArray(carts) ? carts.length : 0;
        dispatch(setCountCart(count));
      } catch {
        dispatch(setCountCart(0));
      }
    };
    fetchCountCart();
  }, [isLoggedIn, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    setIsLoggedIn(false);
    dispatch(setCountCart(0));
    navigate('/client/home');
  };

  const renderMenuAvatar = () => {
    return menuAvatar.map((item, index) => {
      return (
        <li
          key={index}
          className='p-2 hover:bg-accent/10 transition-all duration-200 ease-in-out'
        >
          <Link
            to={item.to}
            className='block'
          >
            {item.text}
          </Link>
        </li>
      );
    });
  };

  return (
    <header className='bg-ink sticky top-0 z-50 shadow-lg'>
      <div className='w-container h-header mx-auto flex items-center justify-between border-b border-white/10'>
        <Link to='/client/' className='text-white flex items-center group'>
          <div className='w-12 h-12 mr-3 flex items-center justify-center rounded-full ring-1 ring-accent/40 bg-white/5 transition-transform duration-300 group-hover:scale-105'>
            <BrandMark />
          </div>
          <div className='leading-none'>
            <p className='text-2xl font-extrabold tracking-[0.12em]'>
              ROS<span className='text-accent'>WATCH</span>
            </p>
            <span className='text-[10px] uppercase tracking-[0.3em] text-white/50'>
              Luxury Timepieces
            </span>
          </div>
        </Link>
        <div>
          {isLoggedIn ? (
            <div className='flex items-center relative'>
              <div className='relative inline-block'>
                <FaShoppingCart
                  className='mr-4 text-white text-3xl cursor-pointer hover:opacity-85'
                  onClick={() => navigate('/client/cart')}
                />
                <span
                  className='absolute -top-1 -right-1 bg-accent text-ink rounded-full text-xs text-center font-bold
                  min-w-[20px] h-5 px-1 leading-5 border-2 border-ink flex items-center justify-center'
                >
                  {counterCart ?? 0}
                </span>
              </div>
              <div
                className='w-10 h-10 bg-white rounded-full border-2 border-accent relative flex items-center justify-center'
                onMouseEnter={() => setIsHoveredAvatar(true)}
                onMouseLeave={() => setIsHoveredAvatar(false)}
              >
                <AiOutlineUser className='text-ink text-2xl' aria-hidden='true' />
                {isHoveredAvatar && (
                  <div className='absolute top-5 right-0 z-50 transition-all duration-200 ease-in-out'>
                    <ul className='bg-white shadow-2xl w-36 rounded-md mt-5 overflow-hidden'>
                      {renderMenuAvatar()}
                      <hr />
                      <li className='p-2 hover:bg-accent/10 transition-all duration-200 ease-in-out block cursor-pointer font-bold'>
                        <button
                          onClick={handleLogout}
                          className='flex items-center'
                        >
                          <BiArrowFromLeft className='text-red-500' />
                          <p className='ml-2'>Đăng xuất</p>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className='flex gap-3'>
              <Link
                to='/login'
                className='flex items-center gap-1.5 bg-white text-ink py-2 px-4 rounded-lg hover:bg-gray-100 font-semibold transition-colors'
              >
                Đăng nhập
                <AiOutlineUser />
              </Link>
              <Link
                to='/register'
                className='flex items-center gap-1.5 bg-accent text-white py-2 px-4 rounded-lg hover:brightness-95 font-semibold transition'
              >
                Đăng ký
                <AiOutlineUsergroupAdd />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className='w-container py-3 mx-auto flex items-center text-white justify-between'>
        <div>
          <Navbar />
        </div>
        <div className='flex'>
          <AiOutlinePhone className='w-8 h-7' />
          <span className='text-white text-lg font-semibold'>Hotline: +84 968794894</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
