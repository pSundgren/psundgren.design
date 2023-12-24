import React from "react";
import { CatalogueHero } from "../sections/Hero";

/* DATA IMPORT */
import data from "./catalogue_data/WPTech.json";

const WPTech = () => {
  const { page } = data;
  return (
    <section id="wp_tech">
      <CatalogueHero title={page.title} desc={page.desc} />
    </section>
  );
};

export default WPTech;
