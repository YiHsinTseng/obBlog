import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    // 直接重定向到 /docs
    history.push('/obBlog/docs');
  }, [history]);

  return (
    <Layout
      title={`Redirecting...`}
      description="Redirecting to documentation...">
      {/* <main>
        <h1>Redirecting...</h1>
        <p>If you are not redirected, <a href="/docs">click here</a>.</p>
      </main> */}
    </Layout>
  );
}