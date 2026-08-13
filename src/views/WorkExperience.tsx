import { Box, Link } from "@mui/material";
import { FC } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import WorkCard from "../components/WorkCard";
import { jobs, profile } from "../data/data";

const WorkExperience: FC = () => (
  <Section
    id="experience"
    label="Experience"
    title="Ten years of shipping"
    tinted
    intro={
      <>
        A decade across insurance, adtech, and fleet safety — most recently
        owning design systems and front-end architecture. More detail on{" "}
        <Link href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </Link>
        .
      </>
    }
  >
    <Box sx={{ maxWidth: 900 }}>
      {jobs.map((job, index) => (
        <Reveal key={job.company + job.time} delay={index * 60}>
          <WorkCard {...job} />
        </Reveal>
      ))}
    </Box>
  </Section>
);

export default WorkExperience;
