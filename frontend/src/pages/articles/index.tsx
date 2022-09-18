import * as React from 'react';
import { graphql } from 'gatsby';
import { AllMarkdownRemark } from '@/types/markdown';

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          slug
          date
          tags
        }
      }
    }
  }
`;

export default function ({
  data,
}: {
  data: { allMarkdownRemark: AllMarkdownRemark };
}) {
  const [searchTag, setSearchTag] = React.useState('');

  const tableOfContents = data.allMarkdownRemark.nodes
    .filter((node) => !searchTag || node.frontmatter.tags.includes(searchTag))
    .sort((a, b) => (a.frontmatter.date <= b.frontmatter.date ? 1 : -1))
    .map((node) => (
      <li key={node.id}>
        {node.frontmatter.date}{' '}
        <a href={'./' + node.frontmatter.slug}>
          {node.frontmatter.title}
        </a>
      </li>
    ));

  return (
    <main>
      <h1>記事一覧</h1>
      <label>
        タグ検索
        <input type="text" value={searchTag} onChange={e => setSearchTag(e.target.value)} />
      </label>
      <ul>{tableOfContents}</ul>
    </main>
  );
}
