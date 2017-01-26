import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Home extends Component {
  render() {
    return <div className="home-container">
        <h1>Our Beautiful America</h1>
    </div>
  }
}

const mapStateToProps = state => ({
  device: state.app.get('device')
});

export default connect(mapStateToProps)(Home);