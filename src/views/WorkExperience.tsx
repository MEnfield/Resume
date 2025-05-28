import { Box, Grid, Link, SvgIcon, Typography } from "@mui/material";
import { FC, JSX, ReactElement, useState } from "react";
import WorkCard from "../components/WorkCard";
import { jobs } from "../data/data";
import Animation from "../components/Animation";
import { Waypoint } from "react-waypoint";

const WorkExperience: FC = ({}) => {
  // Component variables
  const [isInViewport, setIsInViewport] = useState(false);

  // Component state

  // Component effects

  // Function binding

  return (
    <Waypoint onEnter={() => setIsInViewport(true)}>
      <div>
        <Box
          id="work-experience"
          sx={(theme) => ({
            p: theme.spacing(6, 12),
            backgroundColor: "secondary.main",
            borderTop: (theme) => `3px dotted ${theme.palette.accent.main}`,
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
                    <Typography variant="sectionHeader" color="white.main">
                      My Work Experience
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
                      color="white.main"
                    >
                      For more details, please check out my{" "}
                      <Link
                        color="text.primary"
                        fontWeight="bold"
                        href="https://www.linkedin.com/in/mitchell-enfield-966014117/"
                      >
                        LinkedIn Profile
                      </Link>{" "}
                      or{" "}
                      <Link
                        component="a"
                        download="Resume - Mitchell Enfield.pdf"
                        href="/src/assets/Resume.pdf"
                        color="text.primary"
                        fontWeight="bold"
                        sx={{ cursor: "pointer" }}
                      >
                        download my resume
                      </Link>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Grid container direction="column" gap={2}>
              {jobs.map((work, index) => (
                <Animation
                  key={index}
                  animationName="fadeInScale"
                  duration={500}
                  delay={350 * (index + 1)}
                  beforeStyle={{ opacity: 0 }}
                  doneStyle={{ opacity: 1 }}
                  shouldAnimate={isInViewport}
                  element={
                    <Grid>
                      <WorkCard
                        title={work.title}
                        company={work.company}
                        time={work.time}
                        description={work.description}
                        icon={work.icon}
                      />
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

export default WorkExperience;
