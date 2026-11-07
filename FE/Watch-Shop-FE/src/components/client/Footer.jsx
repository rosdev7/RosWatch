import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-ink text-neutral-300'>
      <div className='w-container mx-auto px-6 pt-14 pb-10'>
        <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h6 className='mb-4 flex items-center gap-2 font-serif text-xl font-bold text-white'>
              <span className='inline-block w-1.5 h-6 bg-accent rounded-full' />
              ROS<span className='text-accent'>WATCH</span>
            </h6>
            <p className='text-sm leading-6 text-neutral-400'>
              Khám phá công nghệ đồng hồ thông minh tại cửa hàng trực tuyến của chúng tôi, với bộ
              sưu tập đa dạng kết hợp phong cách và tiện ích.
            </p>
            <div className='mt-5 flex gap-3'>
              <a
                href='#!'
                aria-label='Facebook'
                className='flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-accent hover:bg-accent hover:text-ink'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h6 className='mb-4 text-sm font-bold uppercase tracking-wider text-accent'>Liên hệ</h6>
            <p className='text-sm text-neutral-400 mb-2'>Email: roswatch8255@gmail.com</p>
            <p className='text-sm text-neutral-400'>Điện thoại: +84 968794894</p>
          </div>

          <div>
            <h6 className='mb-4 text-sm font-bold uppercase tracking-wider text-accent'>
              Hỗ trợ khách hàng
            </h6>
            <p className='text-sm text-neutral-400 mb-2 hover:text-white transition cursor-pointer'>Câu hỏi thường gặp</p>
            <p className='text-sm text-neutral-400 mb-2 hover:text-white transition cursor-pointer'>Giao hàng &amp; Đổi trả</p>
            <p className='text-sm text-neutral-400 hover:text-white transition cursor-pointer'>Bảo hành</p>
          </div>

          <div>
            <h6 className='mb-4 text-sm font-bold uppercase tracking-wider text-accent'>
              Đăng ký nhận tin
            </h6>
            <p className='text-sm text-neutral-400 mb-4'>
              Đăng ký nhận tin khuyến mãi và cập nhật mới nhất từ chúng tôi.
            </p>
            <div className='flex'>
              <input
                type='email'
                placeholder='Email của bạn'
                className='h-10 flex-1 min-w-0 rounded-l-full bg-white/10 px-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:bg-white/15'
              />
              <button className='rounded-r-full bg-accent px-4 text-sm font-bold text-ink hover:bg-accent-dark transition'>
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10 py-5 text-center text-sm'>
        <span className='text-neutral-400'>© 2026 Bản quyền thuộc về </span>
        <span className='font-semibold text-accent'>RosWatch</span>
      </div>
    </footer>
  );
};

export default Footer;
