import '../../css/signup.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SignSetup } from '../../config/firebase';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const checkSignup = async () => {
    console.log(name, email, password);

    if (!email || !password || !name || !confirmPassword) {
      alert('Please enter all values');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const res = await SignSetup({ email, password, name });
    console.log(res);

    if (res) {
      navigate('/login');
    } else {
      alert('Invalid signup. Please try again.');
    }
  };

  return (
    <div>
      <div className="container1 container">
        <img src='https://olx1-2be1d.web.app/src/signup/sign.svg' alt='Signup' />
        <h3>Welcome to OLX</h3>
        <h6>The trusted community of buyers <br /> and sellers.</h6>
        <input
          placeholder='Enter Your Name'
          size={30}
          className='signInput'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          size={30}
          placeholder='Enter Your Email'
          type='email'
          className='signInput'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          size={30}
          placeholder='Enter Your Password'
          type='password'
          className='signInput'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          size={30}
          placeholder='Enter Confirm Password'
          type='password'
          className='signInput'
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <button className="btn" onClick={checkSignup}>Sign Up</button>
        <br />
        <p>
          By continuing, you are accepting <br />
          <span>OLX Terms of use</span> and <span style={{ color: 'skyblue' }}>Privacy Policy</span>
        </p>
        <p>
          You already have an account? <label onClick={() => navigate('/login')} style={{ color: 'rgb(232, 104, 170)', fontSize: '1.1rem', cursor: 'pointer' }}> Log In</label>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
