import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()} <a href={githubUrl}>{author}</a>
        <br />
        Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        &nbsp;| Theme by <a href="https://github.com/zoomKoding/gatsby-starter-zoomkoding">zoomkoding</a>
        &nbsp;| Font by <a href="https://cactus.tistory.com/306">orioncactus</a>
      </p>
    </footer>
  </>
);

export default PageFooter;
