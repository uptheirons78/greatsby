import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Created by {author} © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
