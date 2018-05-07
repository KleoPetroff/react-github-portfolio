import React, { Component } from 'react';
import { getUserInfo } from '../../../utils/helpers';

import './info.css';

export default class Info extends Component {
  state = {
    info: null
  };

  async componentDidMount() {
    let info = {};

    try {
      info = await getUserInfo();

      localStorage.setItem('info', JSON.stringify(info));
    } catch (e) {
      info = JSON.parse(localStorage.getItem('info'));
    } finally {
      this.setState({ info: info.data });
    }
  }

  render() {
    if (!this.state.info) return <div />;

    return (
      <div className="info">
        <div className="info-header">{this.state.info.name}</div>
        <div className="info-content">
          <div className="info-section">
            <h3>{this.state.info.public_repos} </h3>
            <div className="info-section-content">Repos</div>
          </div>
          <div className="info-section">
            <h3>{this.state.info.followers} </h3>
            <div className="info-section-content">Followers</div>
          </div>
          <div className="info-section">
            <h3>{this.state.info.following} </h3>
            <div className="info-section-content">Following</div>
          </div>
        </div>
      </div>
    );
  }
}
