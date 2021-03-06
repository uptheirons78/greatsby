import React from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const contentfulData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "DD MM YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `);

  const posts = contentfulData.allContentfulBlogPost.edges;

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog Page</h1>
      <ol className="posts">
        {posts.map(post => {
          const { title, id, slug, publishedDate } = post.node;
          return (
            <li key={id} className="post">
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>Published: {publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
