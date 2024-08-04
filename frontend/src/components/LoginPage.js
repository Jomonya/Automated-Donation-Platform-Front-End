import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { login } from '../app/authSlice';
import './LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password, role })).unwrap();
      if (role === 'admin') {
        history.push('/admin');
      } else if (role === 'donor') {
        history.push('/donor');
      } else if (role === 'charity') {
        history.push('/charity');
      }
    } catch (err) {
      console.error('Failed to login: ', err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="donor">Donor</option>
            <option value="charity">Charity</option>
          </select>
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="separator">or</div>
        <button type="button" className="signup-button" onClick={() => history.push('/signup')}>SignUp</button>
      </form>
    </div>
  );
};

export default Login;
