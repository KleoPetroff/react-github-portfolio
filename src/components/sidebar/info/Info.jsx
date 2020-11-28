import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../../../utils/api';

import './info.css';

const Info = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      let fetchedInfo;

      try {
        const user = await getUserInfo();
        fetchedInfo = user.data;

        localStorage.setItem('info', JSON.stringify(fetchedInfo));
      } catch (e) {
        fetchedInfo = JSON.parse(localStorage.getItem('info')) || null;
      } finally {
        setInfo(fetchedInfo);
      }
    };

    fetchUserInfo();
  }, []);

  if (!info) return <div />;

  return (
    <div className="info">
      <div className="info-header">{info.name}</div>
      <div className="info-content">
        <div className="info-section">
          <h3>{info.public_repos} </h3>
          <div className="info-section-content">Repos</div>
        </div>
        <div className="info-section">
          <h3>{info.followers} </h3>
          <div className="info-section-content">Followers</div>
        </div>
        <div className="info-section">
          <h3>{info.following} </h3>
          <div className="info-section-content">Following</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
