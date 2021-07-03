import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()} <a href={githubUrl}>{author}</a>
        <br />
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
        &nbsp;| <a href="https://github.com/zoomKoding/gatsby-starter-zoomkoding">Theme</a> by zoomkoding
        &nbsp;| <a href="https://cactus.tistory.com/306">Font</a> by orioncactus
      </p>
    </footer>
  </>
);

export default PageFooter;
