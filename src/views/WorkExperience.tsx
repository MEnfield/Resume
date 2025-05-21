import { Box, Grid, Link, SvgIcon, Typography } from "@mui/material";
import { FC, JSX, ReactElement, useState } from "react";
import WorkCard from "../components/WorkCard";
import { jobs } from "../data/data";

const WorkExperience: FC = ({}) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      id="work-experience"
      sx={(theme) => ({
        p: theme.spacing(6, 12),
        backgroundColor: "secondary.main",
        borderTop: (theme) => `3px dotted ${theme.palette.accent.main}`,
      })}
    >
      <Grid container direction="column" gap={4}>
        <Grid container direction="column" gap={2} textAlign="center">
          <Grid>
            <Typography variant="sectionHeader" color="white.main">
              My Work Experience
            </Typography>
          </Grid>
          <Grid>
            <Typography fontSize={24} lineHeight="32px" color="white.main">
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
          </Grid>
        </Grid>
        <Grid container direction="column" gap={2}>
          {jobs.map((work, index) => (
            <Grid key={index}>
              <WorkCard
                title={work.title}
                company={work.company}
                time={work.time}
                description={work.description}
                icon={work.icon}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkExperience;
