import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const handleNavigation = (navigate) => {
    // window.location
  };

  // State to manage collapses
  const [collapseState, setCollapseState] = useState({
    dashboards: true,
    usersMenu: false,
    userProfileMenu: false,
    accountMenu: false,
    ecommerceMenu: false,
    ecommerceProductsMenu: false,
    ecommerceOrdersMenu: false,
    ecommerceCustomersMenu: false,
  });

  const [collapseStateSub, setCollapseStateSub] = useState({
    ecommerceOrdersMenu: false,
    ecommerceProductsMenu: false,
    ecommerceCustomersMenu: false,
  });

  // Toggle collapse state and close other dropdowns
  const toggleCollapse = (menu) => {
    setCollapseState((prevState) => {
      const newState = {
        dashboards: false,
        usersMenu: false,
        userProfileMenu: false,
        accountMenu: false,
        ecommerceMenu: false,
        ecommerceProductsMenu: false,
        ecommerceOrdersMenu: false,
        ecommerceCustomersMenu: false,
      };

      // Toggle the selected menu
      newState[menu] = !prevState[menu];

      return {
        ...prevState,
        ...newState,
      };
    });
  };

  const toggleCollapseSub = (menu) => {
    setCollapseStateSub((prevState) => {
      const newState = {
        ecommerceOrdersMenu: false,
        ecommerceProductsMenu: false,
        ecommerceCustomersMenu: false,
      };

      // Toggle the selected menu
      newState[menu] = !prevState[menu];

      return {
        ...prevState,
        ...newState,
      };
    });
  };

  return (
    <div className="navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white">
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset pb-0">
          <button className="navbar-brand bg-transparent border-0" aria-label="Front">
            <img className="navbar-brand-logo" src="src/assets/svg/logos/logo.svg" alt="Logo" />
          </button>
          <button type="button" className="navbar-aside-toggler" onClick={() => toggleCollapse('dashboards')}>
            <i className="bi-arrow-bar-left navbar-toggler-short-align" title="Collapse"></i>
            <i className="bi-arrow-bar-right navbar-toggler-full-align" title="Expand"></i>
          </button>
          <div className="navbar-vertical-content mt-5">
            <div id="navbarVerticalMenu" className="nav nav-pills nav-vertical">
              <div className="nav-item">
                <button
                  style={{ width: '100%' }}
                  className={`nav-link ${collapseState.dashboards ? 'active' : ''}`}
                  onClick={() => toggleCollapse('dashboards')}
                >
                  <i className="bi-house-door nav-icon"></i>
                  <Link to="/dashboard" className="nav-link-title">Dashboards</Link>
                </button>
              </div>
              <span className="dropdown-header mt-4">Pages</span>
              <div className="nav-item">
                <button className="nav-link dropdown-toggle" onClick={() => toggleCollapse('usersMenu')}>
                  <i className="bi-people nav-icon"></i>
                  <span className="nav-link-title">Users</span>
                </button>
                <div className={`nav-collapse ${collapseState.usersMenu ? 'collapse-open' : 'collapse-close'}`}>
                  <Link to="/user-overview" className="nav-link bg-transparent border-0">Overview</Link>
                  <Link to="/user-liderboard" className="nav-link bg-transparent border-0">Leaderboard</Link>
                  <Link to="/add-user" className="nav-link bg-transparent border-0">Add User</Link>
                </div>
              </div>
              <div className="nav-item">
                <button className="nav-link dropdown-toggle" onClick={() => toggleCollapse('ecommerceMenu')}>
                  <i className="bi-basket nav-icon"></i>
                  <span className="nav-link-title">E-commerce</span>
                </button>
                <div className={`nav-collapse ${collapseState.ecommerceMenu ? 'collapse-open' : 'collapse-close'}`}>
                  <button className="nav-link">Overview</button>
                  <div>
                    <div className="nav-item">
                      <button className="nav-link dropdown-toggle" onClick={() => toggleCollapseSub('ecommerceProductsMenu')}>
                        Products
                      </button>
                      <div className={`nav-collapse ${collapseStateSub.ecommerceProductsMenu ? 'collapse-open' : 'collapse-close'}`}>
                        <button className="nav-link">Products</button>
                        <button className="nav-link">Product Details</button>
                        <button className="nav-link">Add Product</button>
                      </div>
                    </div>
                    <div className="nav-item">
                      <button className="nav-link dropdown-toggle" onClick={() => toggleCollapseSub('ecommerceOrdersMenu')}>
                        Orders
                      </button>
                      <div className={`nav-collapse ${collapseStateSub.ecommerceOrdersMenu ? 'collapse-open' : 'collapse-close'}`}>
                        <button className="nav-link">Orders</button>
                        <button className="nav-link">Order Details</button>
                      </div>
                    </div>
                    <div className="nav-item">
                      <button className="nav-link dropdown-toggle" onClick={() => toggleCollapseSub('ecommerceCustomersMenu')}>
                        Customers
                      </button>
                      <div className={`nav-collapse ${collapseStateSub.ecommerceCustomersMenu ? 'collapse-open' : 'collapse-close'}`}>
                        <button className="nav-link">Customers</button>
                        <button className="nav-link">Customer Details</button>
                        <button className="nav-link">Add Customers</button>
                      </div>
                    </div>
                  </div>
                  <button className="nav-link">Referrals</button>
                  <button className="nav-link">Manage Reviews</button>
                  <button className="nav-link">Checkout</button>
                </div>
              </div>
              <div className="nav-item">
                <button className="nav-link">
                  <i className="bi-key nav-icon"></i>
                  <span className="nav-link-title">API Keys</span>
                </button>
              </div>
              <div className="nav-item">
                <button className="nav-link">
                  <i className="bi-eye nav-icon"></i>
                  <span className="nav-link-title">Welcome Page</span>
                </button>
              </div>
              <div className="nav-item">
                <button className="nav-link">
                  <i className="bi-box-seam nav-icon"></i>
                  <span className="nav-link-title">Landing Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
