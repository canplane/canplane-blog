import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not Found" />
    <div style={{
      marginTop: '80px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '60px',
        fontWeight: 600,
      }}>404</h1>
      <p style={{
        marginTop: '12px',
        fontSize: '20px',
        fontWeight: 300,
      }}>Not Found</p>
    </div>
  </Layout>
);

export default NotFoundPage;
