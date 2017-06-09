import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import Userinfo from './Userinfo';
// import Courses from './Courses';
// import Notifications from './Notifications';

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(getUserData());
  }

  render() {
    return (
      <div className="App">
      <Userinfo/>
        {JSON.stringify(this.props)}       
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {personalInfo, courses, notifications} = state;

  return {
    personalInfo,
    courses,
    notifications
  }
}

export default connect(mapStateToProps)(App)

