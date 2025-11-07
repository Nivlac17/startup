import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button className='ms-4' variant='primary' onClick={() => navigate('/navigation')}>
        Make Art
      </Button>
      <Button className='ms-3' variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
