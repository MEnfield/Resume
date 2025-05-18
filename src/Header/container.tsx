import { Box, Grid, Link, Typography, useTheme } from "@mui/material";
import { FC, useState } from "react";

const HeaderContainer: FC = ({}) => {
  // Component variables
  const theme = useTheme();

  // Component state

  // Component effects

  // Function binding

  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: (theme) =>
              `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            zIndex: 3,
            position: "relative",
          }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            p={theme.spacing(0, 8)}
            height="90px"
          >
            <Grid size="grow">
              <Typography component="h1" fontSize="36px" color="white.main">
                Mitchell Enfield
              </Typography>
            </Grid>
            <Grid container direction="row" gap={1}>
              <Grid>
                <Link href="tel:5616990925">
                  <Typography component="h2" fontSize="24px" color="white.main">
                    (561) 699-0925
                  </Typography>
                </Link>
              </Grid>
              <Grid>
                <Typography component="h2" fontSize="24px" color="white.main">
                  |
                </Typography>
              </Grid>
              <Grid>
                <Link href="mailto: MitchEnfield@gmail.com">
                  <Typography component="h2" fontSize="24px" color="white.main">
                    MitchEnfield@gmail.com
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: 50,
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: theme.palette.primary.main }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: theme.palette.secondary.main }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0.00,20 C149.99,60.00 271.49,-5 500.00,20 L500.00,0.00 L0.00,0.00 Z"
              fill="url(#grad)"
            />
          </svg>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 75,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path
              d="M0.00,20 C149.99,60.00 271.49,-5 500.00,20 L500.00,0.00 L0.00,0.00 Z"
              fill={theme.palette.accent.main}
            />
          </svg>
        </Box>
      </Box>
    </>
  );
};

export default HeaderContainer;
