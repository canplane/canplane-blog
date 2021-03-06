import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

import AuthorIcon from '../../assets/author-icon';

const PageHeader = ({ siteTitle }) => (
  <header className="page-header-wrapper">
    <div className="page-header">
      <div className="front-section">
        <Link className="link" to="/">
          <div className="arthor">
            <AuthorIcon />
            {siteTitle}
          </div>
        </Link>
      </div>
      <div className="trailing-section">
        <Link className="link" to="/about">
          about
        </Link>
        <Link className="link" to="/posts">
          posts
        </Link>
      </div>
    </div>
  </header>
);

PageHeader.propTypes = {
  siteTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  siteTitle: ``,
};

export default PageHeader;
