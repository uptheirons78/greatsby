import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <header className="header">
      <h1>
        <Link to="/" className="title">
          {title}
        </Link>
      </h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-item" activeClassName="active-nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-item"
              activeClassName="active-nav-item"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-item"
              activeClassName="active-nav-item"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="nav-item"
              activeClassName="active-nav-item"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
