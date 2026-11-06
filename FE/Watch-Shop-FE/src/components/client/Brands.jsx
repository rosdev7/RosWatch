import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import requestHandle from '../../utils/requestHandle';

const Brands = ({ handleGetProductsByBrand }) => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await requestHandle.get('brands/');
      const data = await response.data.data;
      setBrands(data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  const renderData = () => {
    return brands.map((item, index) => {
      return (
        <div
          key={index}
          onClick={() => handleGetProductsByBrand(item.id)}
          className={`col-span-3 bg-white text-main-black text-base text-center font-semibold
           px-4 py-4 rounded-xl cursor-pointer transition-all
           duration-200 ease-in-out border border-gray-200 shadow-sm
           hover:-translate-y-1 hover:shadow-lg hover:bg-ink hover:text-white hover:border-ink`}
        >
          {item.name}
        </div>
      );
    });
  };

  return (
    <div className='mt-14'>
      <div className='text-center'>
        <span className='eyebrow'>Đối tác chính hãng</span>
        <h2 className='section-title mt-3 text-3xl md:text-4xl font-bold'>
          Thương hiệu nổi bật
        </h2>
      </div>
      <div className='grid grid-cols-12 gap-4 mt-8'>{renderData()}</div>
    </div>
  );
};

export default Brands;
