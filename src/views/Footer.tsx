import { Box, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";

const Footer: FC = ({}) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      component="section"
      id="contact"
      sx={(theme) => ({
        p: theme.spacing(8, 12),
        borderTop: (theme) => `3px dotted ${theme.palette.accent.main}`,
        backgroundColor: "secondary.main",
        [theme.breakpoints.down("md")]: {
          p: (theme) => theme.spacing(2, 2, 2, 2),
        },
      })}
    >
      <Grid container direction="column" gap={2} textAlign="center">
        <Grid>
          <Typography variant="sectionHeader" color="white">
            Still Reading?
          </Typography>
        </Grid>
        <Grid>
          <Typography fontSize={24} lineHeight="32px" color="white">
            Thank you for taking the time to look through my webpage. If you're
            interested in linking up, please reach out to me! <br />
            My email is{" "}
            <Link
              fontWeight="bold"
              href="mailto:MitchEnfield@gmail.com"
              color="text.primary"
            >
              MitchEnfield@gmail.com
            </Link>{" "}
            and my work phone is{" "}
            <Link fontWeight="bold" href="tel:5616990925" color="text.primary">
              (561)699-0925
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
