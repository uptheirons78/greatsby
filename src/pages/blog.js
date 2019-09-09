import React from "react";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h1>Blog Page</h1>
      <ol className="posts">
        {posts.map(post => {
          const { title, date } = post.node.frontmatter;
          const { id } = post.node;
          const { slug } = post.node.fields;
          return (
            <li key={id} className="post">
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>Published: {date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
