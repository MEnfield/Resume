import { Box, Chip, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { skills } from "../data/data";

const Skills: FC = ({}) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      component="section"
      id="skills"
      sx={(theme) => ({
        p: theme.spacing(8, 12),
        borderTop: (theme) => `3px dotted ${theme.palette.accent.main}`,
        backgroundColor: "secondary.main",
        [theme.breakpoints.down("md")]: {
          p: (theme) => theme.spacing(2, 2, 2, 2),
        },
      })}
    >
      <Grid container direction="column" gap={4}>
        <Grid container direction="column" gap={2} textAlign="center">
          <Grid>
            <Typography variant="sectionHeader" color="white">
              My Skillset
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          spacing={2}
          p={(theme) => theme.spacing(0, 2)}
        >
          {skills.map((skill) => (
            <Grid key={skill}>
              <Chip
                label={
                  <Typography fontSize={20} lineHeight="24px">
                    {skill}
                  </Typography>
                }
                sx={{
                  color: "secondary.main",
                  backgroundColor: "white.main",
                  boxShadow:
                    "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
