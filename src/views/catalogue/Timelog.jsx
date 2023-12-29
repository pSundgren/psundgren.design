import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Timelog.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";

const Timelog = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="time_log">
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="time_log" />
      <ColorPresentation type="time_log" />
      <MockupsPresentation type="time_log" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default Timelog;
