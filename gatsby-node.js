const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  //if type are equal to MarkdownRemark
  if (node.internal.type === "MarkdownRemark") {
    //get the slug with path.basename Node method
    const slug = path.basename(node.fileAbsolutePath, ".md");
    //create slugs to access them in ___graphql
    createNodeField({
      node: node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // get template path
  const blogTemplate = path.resolve("./src/templates/blog.js");
  // get markdown data
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  response.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      //path to blog template
      component: blogTemplate,
      //create the path for any posts
      path: `/blog/${edge.node.fields.slug}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
  // create a new page
};
