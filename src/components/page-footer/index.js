import React from 'react';

import './style.scss';

const PageFooter = ({ author, githubUrl }) => (
  <>
    <footer className="page-footer-wrapper">
      <p className="page-footer">
        © {new Date().getFullYear()}{/* <a href={githubUrl}>{author}</a>*/}
        &nbsp;| Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        &nbsp;| Theme by <a href="https://github.com/zoomKoding/gatsby-starter-zoomkoding">zoomkoding</a>
      </p>
    </footer>
  </>
);

export default PageFooter;
