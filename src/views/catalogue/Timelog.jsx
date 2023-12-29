import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Timelog.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";
import { Insights } from "../sections/Insights";

const Timelog = () => {
  const { page } = data;
  return (
    <section id="time_log">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <Insights insight_arr={page.insights} />
      <ColorPresentation type="time_log" />
      <MockupsPresentation type="time_log" />
      <ContactMe />
    </section>
  );
};

export default Timelog;
