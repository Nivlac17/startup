import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            email: userName,
            password,
          }),
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        });

        const responseText = await response.text();

        console.log('Auth response:', {
          url: response.url,
          status: response.status,
          contentType: response.headers.get('content-type'),
          body: responseText,
        });

        if (response.ok) {
          localStorage.setItem('userName', userName);
          props.onLogin(userName);
          return;
        }

        let message = `Request failed with status ${response.status}`;

        if (responseText) {
          try {
            const body = JSON.parse(responseText);
            message = body.msg || message;
          } catch {
            message = responseText;
          }
        }

        setDisplayError(`⚠ Error: ${message}`);
      } catch (error) {
        console.error('Authentication request failed:', error);
        setDisplayError(`⚠ Request failed: ${error.message}`);
      }
    }

  return (
    <>
      <div>
        <div className='input-group mb-3'>
          <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        </div>
        <div className='input-group mb-3'>
          <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        </div>
        <Button className='ms-4' variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button className='ms-4' variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}