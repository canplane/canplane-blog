import React from 'react';

import authorImage from '../../assets/author.svg';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ bio, social }) => {
  return (
    <div className="bio-wrapper">
      <div className="bio">
        <img className="logo" alt="logo" src={authorImage} />
        <div className="introduction">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{bio?.name}</strong>
            .<br />
          </p>
          <p className="description">
            {bio?.description}
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar
              links={social}
              style={{
                fontSize: '24px',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
