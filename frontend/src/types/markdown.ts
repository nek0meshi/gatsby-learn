export interface MarkdownRemark {
  id: number;
  html: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string[];
  };
}

export interface AllMarkdownRemark {
  nodes: MarkdownRemark[];
}
