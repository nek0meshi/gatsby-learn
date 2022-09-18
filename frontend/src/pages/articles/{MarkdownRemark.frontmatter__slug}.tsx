import React from 'react';
import { graphql } from 'gatsby';
import { MarkdownRemark } from '@/types/markdown';

export default function Template({
  data,
}: {
  data: { markdownRemark: MarkdownRemark };
}) {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
