import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <h1>Get in touch.</h1>
      <ul>
        <li>
          Email: <a href="mailto:me@maurobono.com">me@maurobono.com</a>
        </li>
        <li>
          Mobile: <a href="tel:+393335555666">+39 333 5555666</a>
        </li>
        <li>
          Twitter: <a href="/">@uptheirons1978</a>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
