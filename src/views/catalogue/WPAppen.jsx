import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPAppen.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  ColorPresentation,
  MockupsPresentation,
  TypographyPresentation,
} from "../sections/Presentations";
import { Insights } from "../sections/Insights";

const WPAppen = () => {
  const { page } = data;
  const key = "wp_appen";

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      {/* <Insights insight_arr={page.insights} /> */}
      <TypographyPresentation type={key} />
      <ColorPresentation type={key} />
      <MockupsPresentation type={key} />
      <ContactMe />
    </section>
  );
};

export default WPAppen;
