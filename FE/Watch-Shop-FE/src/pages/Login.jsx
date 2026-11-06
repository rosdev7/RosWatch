import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Toast from '../components/Toast';
import requestHandle from '../utils/requestHandle';

const SIDE_IMAGE =
  'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&w=1000&q=80';

const initialValues = { email: '', password: '' };

const Login = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedMessage = localStorage.getItem('message');
    const forgotPassword = localStorage.getItem('forgot-password');
    if (storedMessage) {
      setMessage(storedMessage);
      setType('success');
      localStorage.removeItem('message');
    }
    if (forgotPassword) {
      setMessage(forgotPassword);
      setType('success');
      localStorage.removeItem('forgot-password');
    }
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: Yup.string().required('Vui lòng nhập mật khẩu'),
  });

  const handleLogin = async (values) => {
    try {
      const response = await requestHandle.post('login', values);
      const data = await response.data;

      if (data.status === 'success') {
        const accessToken = data.accessToken;
        localStorage.setItem('token', accessToken);
        const user_id = data.userID;
        localStorage.setItem('user_id', user_id);

        if (data.data.roles === 'ROLE_USER') {
          localStorage.setItem('user_id', user_id);
          navigate('/client');
        } else {
          localStorage.setItem('admin_id', user_id);
          navigate('/admin/statistical');
        }
      } else {
        setMessage(data.message);
        setType('error');
      }
    } catch (err) {
      const statusCode = err.response?.status;
      const serverMessage = err.response?.data?.message;
      if (statusCode === 401) {
        setMessage('Email hoặc mật khẩu không đúng!');
        setType('error');
      } else if (statusCode === 403 && serverMessage === 'Account is disabled') {
        setMessage('Tài khoản đã bị vô hiệu hóa');
        setType('error');
      } else if (serverMessage) {
        setMessage(serverMessage);
        setType('error');
      } else {
        setMessage('Đăng nhập thất bại. Vui lòng kiểm tra kết nối và thử lại.');
        setType('error');
      }
    }
  };

  return (
    <div className='bg-cream min-h-screen flex items-start justify-center px-4 py-12'>
      <div className='bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2'>
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
              Chào mừng trở lại
            </h2>
            <p className='mt-3 text-sm text-white/75'>
              Đăng nhập để theo dõi đơn hàng và khám phá những bộ sưu tập mới nhất.
            </p>
          </div>
        </div>

        {/* Form */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          onSubmit={handleLogin}
        >
          <Form className='w-full p-8 sm:p-12'>
            {message && (
              <Toast
                message={message}
                type={type}
                onClose={() => setMessage('')}
              />
            )}
            <div className='mb-8'>
              <span className='eyebrow'>Tài khoản</span>
              <h1 className='section-title mt-2 text-3xl font-bold'>Đăng nhập</h1>
            </div>

            <div className='mb-5'>
              <label className='block text-sm font-semibold text-ink mb-2' htmlFor='email'>
                Email
              </label>
              <Field
                type='email'
                id='email'
                name='email'
                className='w-full h-12 px-4 rounded-xl border border-gray-300 text-sm transition-all focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20'
                placeholder='Nhập email'
              />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            <div className='mb-2'>
              <label className='block text-sm font-semibold text-ink mb-2' htmlFor='password'>
                Mật khẩu
              </label>
              <Field
                type='password'
                id='password'
                name='password'
                className='w-full h-12 px-4 rounded-xl border border-gray-300 text-sm transition-all focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20'
                placeholder='Nhập mật khẩu'
              />
              <ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-1' />
            </div>

            <div className='text-right mb-6'>
              <Link to='/forgot-password' className='text-sm font-medium text-accent-dark hover:underline'>
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full bg-ink text-white font-bold py-3 rounded-full transition-all hover:bg-ink-dark hover:-translate-y-0.5'
            >
              Đăng nhập
            </button>

            <div className='text-center text-sm mt-6 text-gray-500'>
              <span>Chưa có tài khoản? </span>
              <Link to='/register' className='font-bold text-accent-dark hover:underline'>
                Đăng ký ngay
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
