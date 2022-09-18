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
  const tableOfContents = data.allMarkdownRemark.nodes
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
      <ul>{tableOfContents}</ul>
    </main>
  );
}
