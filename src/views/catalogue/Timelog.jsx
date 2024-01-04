import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Timelog.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  ColorPresentation,
  Icons,
  MockupsPresentation,
  TechStackPresentation,
  TypographyPresentation,
} from "../sections/Presentations";
import { Insights } from "../sections/Insights";

const Timelog = () => {
  const { page } = data;
  const key = "time_log";

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      {/* <Insights insight_arr={page.insights} /> */}
      {/* <TechStackPresentation type={key} /> */}
      <TypographyPresentation type={key} />
      <ColorPresentation type={key} />
      <Icons type={key} />
      <MockupsPresentation type={key} />
      <ContactMe />
    </section>
  );
};

export default Timelog;
