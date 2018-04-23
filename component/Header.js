import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header>
        <nav className="navbar navbar-inverse no_radius">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand text-white" href="#">Expensify</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#" className="navbar-link text-white" onClick={startLogout}><span className="glyphicon glyphicon-user"></span> Logout</a></li>
                </ul>
            </div>
        </nav>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
