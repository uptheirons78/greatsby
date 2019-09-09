import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Head from "../components/Head";

const AboutPage = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About me.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dicta.
      </p>
      <p>
        Error eum, fugit voluptatum velit sit hic quisquam magni a ipsum itaque?
      </p>
      <Link to="/contact">Get in touch</Link>
    </Layout>
  );
};

export default AboutPage;
