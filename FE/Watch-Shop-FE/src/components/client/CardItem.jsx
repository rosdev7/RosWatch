import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from './RatingStar';
import { lamTronGia, getImageUrl } from '../../utils/functionCommon';

const CardItem = ({ item }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/client/product-detail/${id}`);
  };

  return (
    <div className='product-card col-span-3 flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm'>
      <div className='relative'>
        {item?.discount > 0 && (
          <span className='absolute top-3 left-3 z-50 bg-main-red text-white rounded-full py-1 px-3 text-xs font-semibold shadow-md'>
            -{item?.discount}%
          </span>
        )}
        <div
          className='cursor-pointer overflow-hidden h-[280px] bg-gray-50 flex items-center justify-center'
          onClick={() => handleNavigate(item.id)}
        >
          <img
            className='h-full w-full object-contain p-6 transition-transform duration-300 ease-out hover:scale-110'
            src={getImageUrl(item.imageSource[0])}
            alt={item?.name || 'product'}
          />
        </div>
      </div>
      <div className='p-5 flex flex-col flex-1 gap-2'>
        <h5
          className='text-base font-semibold leading-snug text-gray-800 text-center truncate cursor-pointer hover:text-main-red transition-colors'
          onClick={() => handleNavigate(item.id)}
          title={item?.name}
        >
          {item?.name}
        </h5>
        <div className='flex justify-center'>
          <Rating
            isDisable={true}
            ratingStar={item.star}
          />
        </div>
        <div className='mt-auto flex items-baseline gap-2 justify-center pt-1'>
          <p className='text-lg font-bold text-main-red'>
            {lamTronGia(item?.price - item?.price * (item?.discount / 100))}₫
          </p>
          {item?.discount > 0 && (
            <p className='text-sm font-medium text-gray-400 line-through'>
              {lamTronGia(item?.price)}₫
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
