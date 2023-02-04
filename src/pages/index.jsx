// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="House of Mine">
      <p>Nahahahahahaahahh I'm home honeybunch</p>
      <StaticImage
        src="../images/greth-the-undying.png"
        alt="Greth the Undying"
      />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
