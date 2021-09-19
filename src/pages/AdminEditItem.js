import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemForm from '../components/AdminItemForm';

const AdminEditItem = ({
  item, history, adminStatus, loginUser,
}) => {
  const [error, setError] = useState('');

  const {
    id, title, unit, icon, target,
  } = item;

  return adminStatus && loginUser ? (
    <div className="admin">
      <h1 className="heading">
        Edit Item
        <span className="admin-icon">admin</span>
      </h1>
      <div className="content">
        {error && <p className="error-msg">{error}</p>}
        <ItemForm
          id={id}
          title={title}
          unit={unit}
          icon={icon}
          target={target}
          handleSubmit={handleSubmit}
        />
        <button type="button" className="btn mb2" onClick={onRemove}>Remove Item</button>
        <Link to="/admin" className="btn">Cancel & Back to Item List</Link>
      </div>
    </div>
  ) : <Redirect to="/" />
};

AdminEditItem.propTypes = {
  item: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object),
  adminStatus: PropTypes.bool,
  loginUser: PropTypes.bool.isRequired,
};

AdminEditItem.defaultProps = {
  item: {},
  history: null,
  adminStatus: false,
};

export default AdminEditItem;