import React from 'react';

import authorImage from '../../assets/author.svg';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ bio, social }) => {
  return (
    <div className="bio-wrapper">
      <div className="bio">
        <div className="introduction">
          <p className="title">
            안녕하세요,
            <br />
            제 이름은
            <br />
            <strong>{bio?.name}</strong>
            입니다.<br />
          </p>
          <p className="description">
            {bio?.description}
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar
              links={social}
              style={{
                fontSize: '30px',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            />
          </div>
        </div>
        <img className="logo" alt="logo" src={authorImage} />
      </div>
    </div>
  );
};

export default Bio;
