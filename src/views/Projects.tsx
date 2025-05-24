import { Box, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";

const Projects: FC = ({}) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      component="section"
      id="portfolio"
      sx={(theme) => ({
        p: theme.spacing(8, 12),
        borderTop: (theme) => `3px dotted ${theme.palette.tertiary.main}`,

        [theme.breakpoints.down("md")]: {
          p: (theme) => theme.spacing(2, 2, 2, 2),
        },
      })}
    >
      <Grid container direction="column" gap={4}>
        <Grid container direction="column" gap={2} textAlign="center">
          <Grid>
            <Typography variant="sectionHeader" color="accent">
              My Portfolio
            </Typography>
          </Grid>
          <Grid>
            <Typography fontSize={24} lineHeight="32px" color="secondary">
              Want to see some of my other projects? Check out my public repos
              in{" "}
              <Link
                color="text.primary"
                fontWeight="bold"
                href="https://github.com/MEnfield"
              >
                Github
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          spacing={2}
          alignItems="stretch"
          flexWrap="wrap"
        >
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: "grow" }} key={project.title}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
