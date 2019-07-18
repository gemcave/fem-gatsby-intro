import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About</h1>
    <p>This is my personal webpage</p>
    <Link to="/">&larr; back to home</Link>
  </Layout>
);