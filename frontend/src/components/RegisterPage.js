// src/components/RegisterPage.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../app/registerSlice';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor'); // default role
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.register);

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, role }));
  };

  useEffect(() => {
    if (success) {
      navigate('/login'); // Redirect to login page
    }
  }, [success, navigate]);

  return (
    <div className='register-page'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='role'>Role:</label>
          <select id='role' value={role} onChange={(e) => setRole(e.target.value)}>
            <option value='donor'>Donor</option>
            <option value='charity'>Charity</option>
            <option value='administrator'>Administrator</option>
          </select>
        </div>
        {error && <p className='error'>{error}</p>}
        <button type='submit' disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
