import * as React from 'react';
import type { HeadFC } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>ブログ</h1>
      <ul>
        <li><a href="/articles">記事一覧</a></li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
