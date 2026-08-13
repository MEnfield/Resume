import { Grid, Link } from "@mui/material";
import { FC } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { profile, projects } from "../data/data";

const Projects: FC = () => (
  <Section
    id="work"
    label="Product"
    title="Built and run solo"
    intro={
      <>
        A product I designed, built, and operate end to end — not a demo. More
        code on{" "}
        <Link href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </Link>
        .
      </>
    }
  >
    <Grid container spacing={3} alignItems="stretch">
      {projects.map((project, index) => (
        <Grid
          key={project.title}
          size={{ xs: 12, md: project.featured ? 12 : 6 }}
        >
          <Reveal delay={index * 80}>
            <ProjectCard {...project} />
          </Reveal>
        </Grid>
      ))}
    </Grid>
  </Section>
);

export default Projects;
