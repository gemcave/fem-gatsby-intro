import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hi Frontend Masters!</h1>
    <p>Hello my Home!</p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </Layout>
);
