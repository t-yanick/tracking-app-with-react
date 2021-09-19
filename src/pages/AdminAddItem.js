import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemForm from '../components/AdminItemForm';

const AdminAddItem = ({ history, adminStatus, loginUser }) => {
  const [error, setError] = useState('');

  return adminStatus && loginUser ? (
    <div className="admin">
      <h1 className="heading">
        Admin Add Item
        <span className="admin-icon">Admin</span>
      </h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <ItemForm handleSubmit={handleSubmit} />
        <Link to="/admin" className="btn">Back to Item List</Link>
      </div>
    </div>
  ) : <Redirect to="/" />
};

AdminAddItem.propTypes = {
  history: PropTypes.instanceOf(Object),
  adminStatus: PropTypes.bool,
  loginUser: PropTypes.bool.isRequired,
};

AdminAddItem.defaultProps = {
  history: null,
  adminStatus: false,
};

export default AdminAddItem;