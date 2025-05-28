import { Box, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";
import { Waypoint } from "react-waypoint";
import Animation from "../components/Animation";

const Projects: FC = ({}) => {
  // Component variables

  // Component state
  const [isInViewport, setIsInViewport] = useState(false);

  // Component effects

  // Function binding

  return (
    <Waypoint onEnter={() => setIsInViewport(true)}>
      <div>
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
                <Animation
                  animationName="fadeInScale"
                  duration={500}
                  beforeStyle={{ opacity: 0 }}
                  doneStyle={{ opacity: 1 }}
                  shouldAnimate={isInViewport}
                  element={
                    <Typography variant="sectionHeader" color="accent">
                      My Portfolio
                    </Typography>
                  }
                />
              </Grid>
              <Grid>
                <Animation
                  animationName="fadeInScale"
                  duration={500}
                  delay={500}
                  beforeStyle={{ opacity: 0 }}
                  doneStyle={{ opacity: 1 }}
                  shouldAnimate={isInViewport}
                  element={
                    <Typography
                      fontSize={24}
                      lineHeight="32px"
                      color="secondary"
                    >
                      Want to see some of my other projects? Check out my public
                      repos in{" "}
                      <Link
                        color="text.primary"
                        fontWeight="bold"
                        href="https://github.com/MEnfield"
                      >
                        Github
                      </Link>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              spacing={2}
              alignItems="stretch"
              flexWrap="wrap"
            >
              {projects.map((project, index) => (
                <Animation
                  key={project.title}
                  animationName="horizontalFlip"
                  duration={500}
                  delay={350 * (index + 1)}
                  beforeStyle={{ opacity: 0 }}
                  doneStyle={{ opacity: 1 }}
                  animationEasing="linear"
                  shouldAnimate={isInViewport}
                  element={
                    <Grid size={{ xs: 12, md: 6, lg: "grow" }}>
                      <ProjectCard {...project} />
                    </Grid>
                  }
                />
              ))}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Waypoint>
  );
};

export default Projects;
