import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemList from '../components/AdminItemList';

const AdminHome = ({
  addItems, items, adminStatus, loginUser,
}) => {
  const [error, setError] = useState('');

  return adminStatus && loginUser ? (
    <div className="admin">
      <h1 className="heading">
        Items
        <span className="admin-icon">admin</span>
      </h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <div className="admin__items mb3">
          {items.length > 0 && <ItemList items={items} />}
        </div>
        <Link to="/admin/item/create" className="btn dark">Add Item</Link>
      </div>
    </div>
  ) : <Redirect to="/" />
};

AdminHome.propTypes = {
  addItems: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Object),
  adminStatus: PropTypes.bool,
  loginUser: PropTypes.bool.isRequired,
};

AdminHome.defaultProps = {
  items: [],
  adminStatus: false,
};

export default AdminHome;