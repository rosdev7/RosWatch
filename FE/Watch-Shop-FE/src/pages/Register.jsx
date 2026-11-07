import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import requestHandle from '../utils/requestHandle';
import Toast from '../components/Toast';

const SIDE_IMAGE =
  'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=1000&q=80';
const inputClass =
  'w-full h-12 px-4 rounded-xl border border-gray-300 text-sm transition-all focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20';
const labelClass = 'block text-sm font-semibold text-ink mb-2';

const initialValues = {
  fullName: '',
  birthDate: '',
  phone: '',
  address: '',
  email: '',
  password: '',
  rePassword: '',
};

const Register = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const today = new Date();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Vui lòng nhập họ tên'),
    birthDate: Yup.date()
      .max(today, 'Ngày sinh phải trước hôm nay')
      .required('Vui lòng nhập ngày sinh'),
    phone: Yup.string()
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')
      .required('Vui lòng nhập số điện thoại'),
    address: Yup.string().required('Vui lòng nhập địa chỉ'),
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
      .required('Vui lòng nhập lại mật khẩu'),
  });

  const handleRegister = async (values) => {
    try {
      const response = await requestHandle.post('register', values);
      const data = await response.data;

      if (data.status === 'success') {
        localStorage.setItem('message', data.message);
        navigate('/login');
      } else if (data.status === 'fail') {
        setMessage(data.message);
        setType('error');
      }
    } catch (err) {
      setMessage('Email đã tồn tại!');
      setType('error');
    }
  };

  return (
    <div className='bg-cream min-h-screen flex px-4 py-12'>
      <div className='bg-white w-full max-w-4xl m-auto rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2'>
        {/* Panel ảnh */}
        <div className='relative hidden md:block'>
          <img
            src={SIDE_IMAGE}
            alt='RosWatch'
            className='absolute inset-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-ink/30' />
          <div className='relative z-10 flex h-full flex-col justify-end p-10 text-white'>
            <span className='eyebrow !text-accent'>RosWatch</span>
            <h2 className='section-title mt-3 text-3xl font-bold text-white'>
              Gia nhập cùng chúng tôi
            </h2>
            <p className='mt-3 text-sm text-white/75'>
              Tạo tài khoản để mua sắm nhanh hơn và nhận nhiều ưu đãi hấp dẫn.
            </p>
          </div>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          onSubmit={handleRegister}
        >
          <Form className='w-full p-8 sm:p-10'>
            {message && (
              <Toast
                message={message}
                type={type}
                onClose={() => setMessage('')}
              />
            )}
            <div className='mb-7'>
              <span className='eyebrow'>Tài khoản mới</span>
              <h1 className='section-title mt-2 text-3xl font-bold'>Đăng ký</h1>
            </div>

            <div className='mb-4'>
              <label className={labelClass} htmlFor='fullName'>Họ và tên</label>
              <Field type='text' id='fullName' name='fullName' className={inputClass} placeholder='Nhập họ tên' />
              <ErrorMessage name='fullName' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='mb-4'>
                <label className={labelClass} htmlFor='birthDate'>Ngày sinh</label>
                <Field type='date' id='birthDate' name='birthDate' className={inputClass} />
                <ErrorMessage name='birthDate' component='div' className='text-red-500 text-sm mt-1' />
              </div>
              <div className='mb-4'>
                <label className={labelClass} htmlFor='phone'>Số điện thoại</label>
                <Field type='text' id='phone' name='phone' className={inputClass} placeholder='Nhập SĐT' />
                <ErrorMessage name='phone' component='div' className='text-red-500 text-sm mt-1' />
              </div>
            </div>

            <div className='mb-4'>
              <label className={labelClass} htmlFor='address'>Địa chỉ</label>
              <Field type='text' id='address' name='address' className={inputClass} placeholder='Nhập địa chỉ' />
              <ErrorMessage name='address' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            <div className='mb-4'>
              <label className={labelClass} htmlFor='email'>Email</label>
              <Field type='email' id='email' name='email' className={inputClass} placeholder='Nhập email' />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='mb-4'>
                <label className={labelClass} htmlFor='password'>Mật khẩu</label>
                <Field type='password' id='password' name='password' className={inputClass} placeholder='Mật khẩu' />
                <ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-1' />
              </div>
              <div className='mb-4'>
                <label className={labelClass} htmlFor='rePassword'>Xác nhận</label>
                <Field type='password' id='rePassword' name='rePassword' className={inputClass} placeholder='Nhập lại' />
                <ErrorMessage name='rePassword' component='div' className='text-red-500 text-sm mt-1' />
              </div>
            </div>

            <button
              type='submit'
              className='w-full mt-3 bg-ink text-white font-bold py-3 rounded-full transition-all hover:bg-ink-dark hover:-translate-y-0.5'
            >
              Đăng ký
            </button>

            <div className='text-center text-sm mt-5 text-gray-500'>
              <span>Đã có tài khoản? </span>
              <Link to='/login' className='font-bold text-accent-dark hover:underline'>
                Đăng nhập
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
