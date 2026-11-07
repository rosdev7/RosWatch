import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Bộ sưu tập 2026',
    title: 'Thời gian của\nphong cách',
    desc: 'Khám phá những mẫu đồng hồ chính hãng, tinh xảo trong từng chi tiết dành cho người sành điệu.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Thương hiệu danh tiếng',
    title: 'Đẳng cấp\ntrên cổ tay bạn',
    desc: 'Casio, Garmin, Samsung và nhiều thương hiệu hàng đầu — bảo hành chính hãng, giá tốt nhất.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1495856458515-0637185db551?auto=format&fit=crop&w=1600&q=80',
    eyebrow: 'Ưu đãi hấp dẫn',
    title: 'Giảm đến 50%\ncho mẫu mới',
    desc: 'Cơ hội sở hữu những chiếc đồng hồ yêu thích với mức giá ưu đãi chỉ có tại RosWatch.',
  },
];

const settings = {
  fade: true,
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 900,
  autoplaySpeed: 4500,
  pauseOnHover: false,
};

const Carousel = () => {
  const navigate = useNavigate();

  return (
    <div className='hero-slider overflow-hidden rounded-2xl shadow-xl'>
      <Slider {...settings}>
        {slides.map((item) => (
          <div key={item.id}>
            <div className='relative h-[480px] w-full'>
              <img
                className='absolute inset-0 h-full w-full object-cover'
                src={item.image}
                alt={item.title}
              />
              <div className='absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent' />
              <div className='relative z-10 flex h-full flex-col justify-center px-10 md:px-16 max-w-2xl animate-fade-up'>
                <span className='eyebrow !text-accent'>{item.eyebrow}</span>
                <h2 className='mt-4 whitespace-pre-line font-serif text-5xl md:text-6xl font-bold leading-tight text-white'>
                  {item.title}
                </h2>
                <p className='mt-5 max-w-md text-base text-white/80 leading-relaxed'>
                  {item.desc}
                </p>
                <div className='mt-8'>
                  <button
                    onClick={() => navigate('/client/')}
                    className='inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-bold text-ink shadow-lg transition-all duration-300 hover:bg-accent-dark hover:shadow-xl hover:-translate-y-0.5'
                  >
                    Khám phá ngay
                    <span aria-hidden='true'>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
