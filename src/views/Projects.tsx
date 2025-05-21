import { Box, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";

const Projects: FC = ({}) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      component="section"
      id="projects"
      sx={(theme) => ({
        p: theme.spacing(8, 12),
        [theme.breakpoints.down("md")]: {
          p: (theme) => theme.spacing(2, 2, 0, 2),
        },
      })}
    >
      <Grid container direction="column" gap={4}>
        <Grid container direction="column" gap={2} textAlign="center">
          <Grid>
            <Typography variant="sectionHeader" color="secondary">
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
      </Grid>
    </Box>
  );
};

export default Projects;
