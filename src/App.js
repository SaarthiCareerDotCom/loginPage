import React, { Component } from 'react';
import ProtoTypes from 'proto-types';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
// import Userinfo from './Userinfo';
// import Courses from './Courses';
// import Notifications from './Notifications';

class App extends Component {
  componentDidMount() {
    dispatch(getUserData());
  }

  render() {
    return (
      <div className="App">
        {this.props.personalInfo.name}       
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

