import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()} <a href={githubUrl}>{author}</a>
        <br />
        <a href="https://www.gatsbyjs.com/">Gatsby</a>
        &nbsp;| <a href="https://github.com/zoomKoding/gatsby-starter-zoomkoding">Theme</a> by <a href="https://www.zoomkoding.com/">zoomkoding</a>
        &nbsp;| <a href="https://cactus.tistory.com/306">Font</a> by <a href="https://cactus.tistory.com/">orioncactus</a>
      </p>
    </footer>
  </>
);

export default PageFooter;
