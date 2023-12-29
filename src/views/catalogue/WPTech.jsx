import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/WPTech.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import {
  LogoPresentation,
  ColorPresentation,
  MockupsPresentation,
} from "../sections/Presentations";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const WPTech = ({ changeCursorVariant }) => {
  const { page } = data;
  return (
    <section id="wp_tech" className="App font-primary scroll-smooth">
      <Navbar changeCursorVariant={changeCursorVariant} />
      <CatalogueHero title={page.title} desc={page.desc} />
      <ProjectDescription
        desc={page.overview}
        duration={page.duration}
        roles={page.roles}
      />
      <LogoPresentation type="wp_tech" />
      <ColorPresentation type="wp_tech" />
      <MockupsPresentation type="wp_tech" />
      <ContactMe changeCursorVariant={changeCursorVariant} />
      <Footer changeCursorVariant={changeCursorVariant} />
    </section>
  );
};

export default WPTech;
