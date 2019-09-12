import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header/header';
import * as actions from '../../actions/index';

const Landing = () => <div>Landing</div>
const Dashboard = () => <div>Dashboard</div>
const SurveyNew = () => <div>SurveyNew</div>

const App = ({ fetchUser }) => {
    useEffect(() => {
      fetchUser();
    }, [fetchUser]);

    return (
    <div className="container">
      <BrowserRouter>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew}/>
      </BrowserRouter>
    </div>
  )
};

const mapDispatchToProps =  dispatch => ({
  fetchUser: () => dispatch(actions.fetchUser()),
});

export default connect(null, mapDispatchToProps)(App);
