import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Sản phẩm chính hãng',
    desc: 'Cam kết 100% hàng chính hãng, đầy đủ tem phiếu và bảo hành.',
  },
  {
    title: 'Giá trị vượt trội',
    desc: 'Làm việc trực tiếp với thương hiệu, giá tốt hơn thị trường 30–90%.',
  },
  {
    title: 'Đội ngũ tận tâm',
    desc: 'Tư vấn nhiệt tình, hỗ trợ khách hàng nhanh chóng mọi lúc.',
  },
  {
    title: 'Giao hàng tin cậy',
    desc: 'Đóng gói cẩn thận, giao tận nơi, đổi trả dễ dàng trong 7 ngày.',
  },
];

const stats = [
  { value: '25+', label: 'Năm kinh nghiệm' },
  { value: '50K+', label: 'Khách hàng' },
  { value: '500+', label: 'Mẫu đồng hồ' },
  { value: 'Top 10', label: 'Website uy tín' },
];

export default function About() {
  return (
    <div className='bg-white'>
      {/* Hero trang */}
      <section className='relative flex items-center min-h-[320px]'>
        <img
          src='https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1600&q=80'
          alt='about hero'
          className='absolute inset-0 h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40' />
        <div className='w-container mx-auto relative z-10 px-6 animate-fade-up'>
          <span className='eyebrow !text-accent'>Về chúng tôi</span>
          <h1 className='section-title mt-4 text-4xl md:text-5xl font-bold text-white'>
            Câu chuyện của RosWatch
          </h1>
          <p className='mt-4 max-w-xl text-white/80'>
            Hơn hai thập kỷ đồng hành cùng những người yêu đồng hồ trên khắp Việt Nam.
          </p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className='w-container mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <img
              src='https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=1000&q=80'
              alt='roswatch'
              className='w-full h-[400px] object-cover rounded-2xl shadow-lg'
            />
            <div className='absolute -bottom-6 -right-4 hidden lg:block bg-white border-l-4 border-accent rounded-xl shadow-xl p-6 max-w-xs'>
              <p className='font-serif text-lg font-bold text-ink'>
                Đồng hành cùng bạn hơn 25 năm
              </p>
            </div>
          </div>
          <div>
            <div className='border-l-4 border-accent pl-4 mb-6'>
              <span className='eyebrow'>Who we are</span>
              <h2 className='section-title mt-2 text-3xl md:text-4xl font-bold'>
                Đồng hồ chính hãng, giá tốt nhất
              </h2>
            </div>
            <p className='mb-5 leading-7 text-gray-600'>
              Thành lập từ năm 1998, ROSWATCH là doanh nghiệp đồng hồ chính hãng làm việc trực
              tiếp với các thương hiệu lớn để mang lại mức giá cạnh tranh nhất. So với giá tại các
              cửa hàng đồng hồ tại Việt Nam, chúng tôi cam kết giá thấp hơn 30–90%.
            </p>
            <p className='mb-8 leading-7 text-gray-600'>
              ROSWATCH nằm trong top 10 website thương mại điện tử đáng tin cậy. Với hơn 20 năm nỗ
              lực trong ngành, chúng tôi luôn cố gắng mang chất lượng tuyệt vời đến người dùng đồng
              hồ tại Việt Nam.
            </p>
            <Link
              to='/client/'
              className='inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-semibold text-white transition-all hover:bg-ink-dark hover:-translate-y-0.5'
            >
              Khám phá sản phẩm
              <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Thống kê */}
      <section className='bg-ink'>
        <div className='w-container mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {stats.map((s) => (
            <div key={s.label}>
              <p className='font-serif text-4xl md:text-5xl font-bold text-accent'>{s.value}</p>
              <p className='mt-2 text-sm text-white/70'>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vì sao chọn chúng tôi */}
      <section className='bg-cream'>
        <div className='w-container mx-auto px-6 py-16'>
          <div className='text-center mb-12'>
            <span className='eyebrow'>Cam kết của chúng tôi</span>
            <h2 className='section-title mt-3 text-3xl md:text-4xl font-bold'>
              Vì sao chọn RosWatch?
            </h2>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {features.map((f, i) => (
              <div
                key={i}
                className='bg-white rounded-2xl p-7 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg'
              >
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-accent/15 text-accent-dark font-serif text-xl font-bold mb-4'>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className='font-serif text-xl font-bold text-ink mb-2'>{f.title}</h3>
                <p className='text-sm leading-6 text-gray-600'>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
