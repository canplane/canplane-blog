import React from 'react';

import authorImage from '../../assets/author.svg';
import IconButtonBar from '../icon-button-bar';

import './style.scss';

const Bio = ({ bio, social }) => {
  return (
    <div className="bio-wrapper">
      <div className="bio">
        <div className="introduction english">
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
                fontSize: '30px',
                color: 'rgba(0, 0, 0, 0.54)',
              }}
            />
          </div>
        </div>
        <img className="svg" alt="logo" src={authorImage} />
      </div>
    </div>
  );
};

export default Bio;
