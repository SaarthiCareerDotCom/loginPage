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
    console.log(this.props);
    return (
      <div className="App">
      <Userinfo
        personalInfo = {this.props.personalInfo}
      />
        {this.props.loader && console.log('show loading') &&
          <p>Loading</p>
        }       
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {personalInfo, courses, notifications, loader} = state;

  return {
    personalInfo,
    courses,
    notifications
  }
}

export default connect(mapStateToProps)(App)

