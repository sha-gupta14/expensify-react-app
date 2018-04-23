import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const loginPage = ({ startLogin }) => (
    <div className=" text-center col-md-offset-5 col-md-2 col-sm-2 col-xs-2">
      <h1>Expensify App</h1>
      <p>It is time to get your expenses under control</p>
      <button className="btn btn-primary" onClick={startLogin}>Login with Google</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(loginPage);
