import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/Stormer.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Stormer = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="stormer" className="App font-primary scroll-smooth">
      <Navbar changeCursorVariant={changeCursorVariant} />
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="stormer" />
      <ColorPresentation type="stormer" />
      <MockupsPresentation type="stormer" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
      <Footer changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default Stormer;
