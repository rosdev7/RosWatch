import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Carousel from '../../components/client/Carousel';
import Brands from '../../components/client/Brands';
import Top5Product from '../../components/client/Top5Product';
import Search from '../../components/client/Search';
import ListProduct from '../../components/client/ListProduct';
import requestHandle from '../../utils/requestHandle';
import { setCountCart } from '../../utils/counterCartSlice';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct();
    fetchCountCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await requestHandle.get('product/');
      const data = await response.data.data;
      setProducts(data);
      setFilteredList(data);
    } catch (err) {
      console.log(err);
      navigate('/error');
    }
  };

  const fetchCountCart = async () => {
    try {
      const response = await requestHandle.get('cart/');
      const carts = response.data.data;
      const count = Array.isArray(carts) ? carts.length : 0;
      dispatch(setCountCart(count));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterProducts(event.target.value);
  };

  const filterProducts = (searchTerm) => {
    const filteredList = products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filteredList);
  };

  const handleGetProductsByBrand = async (id) => {
    try {
      const response = await requestHandle.get(`product/?brandId=${id}`);
      const data = await response.data.data;
      setFilteredList(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-container m-auto mt-6 pb-20'>
      <Carousel />
      <Top5Product />
      <Brands handleGetProductsByBrand={handleGetProductsByBrand} />
      <div className='mt-16'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8'>
          <div>
            <span className='eyebrow'>Toàn bộ cửa hàng</span>
            <h2 className='section-title mt-3 text-3xl md:text-4xl font-bold'>
              Tất cả sản phẩm
            </h2>
          </div>
          <div className='relative z-30'>
            <Search
              products={products}
              searchTerm={searchTerm}
              handleSearch={handleSearch}
            />
          </div>
        </div>
        <div className='relative z-10'>
          <ListProduct
            products={products}
            filteredList={filteredList}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
