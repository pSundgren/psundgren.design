import React from "react";

/* DATA IMPORT */
import data from "./catalogue_data/AlrikDrive.json";

/* COMPONENTS */
import { CatalogueHero } from "../sections/Hero";
import { ContactMe } from "../sections/ContactMe";
import { ProjectDescription } from "../sections/ProjectDescription";
import { Logo, Colors, Mockups, Typography } from "../sections/Presentations";
import Section from "../../components/common/Section";

const AlrikDrive = () => {
  const { page } = data;
  const key = "alrik-drive";

  return (
    <section id={key}>
      <CatalogueHero title={page.title} desc={page.overview} />
      <Section p="pt-0 pb-48">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-4">
            <h1 className="text-sm text-gray-500">My works</h1>
            <h2 className="text-3xl text-gray-700">
              Take part of my{" "}
              <span className="font-secondary italic">creative catalogue</span>
            </h2>
          </div>
        </div>
      </Section>
      <ContactMe />
    </section>
  );
};

export default AlrikDrive;
