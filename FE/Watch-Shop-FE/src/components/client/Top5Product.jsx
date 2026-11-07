import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import requestHandler from '../../utils/requestHandle';
import CardItem from './CardItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const Top5Product = () => {
  const [top, setTop] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTop5();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchTop5 = async () => {
    try {
      const response = await requestHandler.get('product/top5');
      const data = await response.data.data;
      setTop(data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  const renderCardItems = () => {
    return top.map((item, i) => {
      return (
        <CardItem
          item={item}
          key={i}
        />
      );
    });
  };

  return (
    <div className='mt-14'>
      <div className='flex items-end justify-between gap-4 mb-6'>
        <div>
          <span className='eyebrow'>Được yêu thích nhất</span>
          <h2 className='section-title mt-3 text-3xl md:text-4xl font-bold'>
            Sản phẩm bán chạy
          </h2>
        </div>
        <span className='hidden md:block h-px flex-1 bg-gray-200 mb-3' />
      </div>
      <Slider
        {...settings}
        className='mt-3'
      >
        {renderCardItems()}
      </Slider>
    </div>
  );
};

export default Top5Product;
