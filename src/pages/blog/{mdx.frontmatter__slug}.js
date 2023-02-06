import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div>{children}</div>
      <p>Posted: {data.mdx.frontmatter.date}</p>
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        date(formatString: "D MMMM YYYY")
      }
      body
      excerpt
    }
  }
`;

export default BlogPost;
