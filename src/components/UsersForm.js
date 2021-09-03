import React, { useState } from 'react';

const UsersForm = ({ handleSubmit, btnName }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {

  };

  return (
    <div>
      <form>
        <div className="form__group">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={username}
          />
        </div>
        <div className="form__group">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
          />
        </div>
        <button type="submit" className="btn">{btnName}</button>
      </form>
    </div>
  );
};

export default UsersForm;