# GreatSby

This project is based on one of my Gatsby Repo: "gatsby-markdown-blog".

#### step-01
* Install gatsby-source-contentful;
* Create .env file and add Gatsby Api Keys;
* Add the plugin inside "gatsby-config" [with options];
* Add a fake placeholder image inside Contentful Media to avoid GraphQL issues;
* Set /pages/blog.js to display all blog posts from Contentful;
* create a query with "allContentfulBlogPost" and render a list of posts;

### step-02
* Create dynamic pages for each post;
* Inside "gatsby-node" remove onCreateNode [slugs are defined in Contentful] and modify ".createPages" [see file];
* Modify Blog Template to render a blog post properly;
* install @contentful/rich-text-react-renderer and use it inside Blog Template;
* create 'options' to display images and other assets;