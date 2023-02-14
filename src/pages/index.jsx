// Step 1: Import React
import * as React from "react";
import SiteLayout from "../components/SiteLayout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <SiteLayout pageTitle="House of Mine">
      <p>Nahahahahahaahahh I'm home honeybunch</p>
      <StaticImage
        src="../images/greth-the-undying.png"
        alt="Greth the Undying"
      />
    </SiteLayout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
