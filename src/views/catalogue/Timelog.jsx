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
  Mockups,
  ProblemAndSolution,
  TypographyPresentation,
} from "../sections/Presentations";

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
      <ColorPresentation type={key} />
      <TypographyPresentation type={key} />
      <Icons type={key} />
      <Mockups type={key} />
      <ContactMe />
    </section>
  );
};

export default Timelog;
