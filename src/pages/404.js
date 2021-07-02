import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <div style={{
      marginTop: '80px',
      textAlign: 'center',
      fontSize: '20px',
    }}>
      <h1 style={{
        fontSize: '64px',
        fontWeight: 700,
      }}>404</h1>
      <p>Not Found</p>
    </div>
  </Layout>
);

export default NotFoundPage;
