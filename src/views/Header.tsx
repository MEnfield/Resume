import {
  Box,
  Collapse,
  Fade,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";

const Header: FC<{
  headerRef: React.RefObject<HTMLHeadElement>;
  drawerWidth: number;
  isScrolling: boolean;
}> = ({ headerRef, drawerWidth, isScrolling }) => {
  // Component variables
  const theme = useTheme();
  const waveHeight = "75px";

  // Component state

  // Component effects

  // Function binding

  console.log({ isScrolling });
  return (
    <>
      <Box
        id="header"
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: drawerWidth,
          right: 0,
          zIndex: 4,
        }}
        pb={12}
        ref={headerRef}
      >
        <Box
          sx={{
            background: (theme) =>
              `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            position: "relative",
            transition: "padding 0.5s ease-in-out",
            p: (theme) =>
              !isScrolling
                ? theme.spacing(4, 8, 0, 8)
                : theme.spacing(2, 4, 2, 4),
            [theme.breakpoints.down("md")]: {
              p: (theme) =>
                !isScrolling
                  ? theme.spacing(2, 2, 0, 2)
                  : theme.spacing(2, 2, 2, 2),
            },
          }}
        >
          <Grid container direction="row" alignItems="center">
            <Grid
              size={{
                xs: 12,
                md: "grow",
              }}
              sx={{
                [theme.breakpoints.down("md")]: {
                  pb: 2,
                },
              }}
            >
              <Typography
                component="h1"
                fontSize={!isScrolling ? "36px" : "18px"}
                color="white.main"
              >
                Mitchell Enfield
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              gap={1}
              size={{
                xs: 12,
                md: "auto",
              }}
            >
              <Grid size={{ xs: 12, md: "auto" }}>
                <Link href="tel:5616990925">
                  <Typography
                    component="h2"
                    color="white.main"
                    sx={{
                      fontSize: !isScrolling ? "24px" : "14px",
                      [theme.breakpoints.down("md")]: {
                        fontSize: !isScrolling ? "18px" : "10px",
                      },
                    }}
                  >
                    (561) 699-0925
                  </Typography>
                </Link>
              </Grid>
              <Grid
                sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontSize: !isScrolling ? "24px" : "14px",
                    [theme.breakpoints.down("md")]: {
                      fontSize: !isScrolling ? "18px" : "10px",
                    },
                  }}
                  color="white.main"
                >
                  |
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: "auto" }}>
                <Link href="mailto: MitchEnfield@gmail.com">
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: !isScrolling ? "24px" : "14px",
                      [theme.breakpoints.down("md")]: {
                        fontSize: !isScrolling ? "18px" : "10px",
                      },
                    }}
                    color="white.main"
                  >
                    MitchEnfield@gmail.com
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Fade in={!isScrolling}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2,
              }}
            >
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1440 320"
                height={waveHeight}
                width="100%"
              >
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
                  fill="url(#grad)"
                  fillOpacity="1"
                  d="M0,192L80,213.3C160,235,320,277,480,266.7C640,256,800,192,960,176C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 30,
                left: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1440 320"
                height={waveHeight}
                width="100%"
              >
                <path
                  fillOpacity="1"
                  fill={theme.palette.accent.main}
                  d="M0,192L80,213.3C160,235,320,277,480,266.7C640,256,800,192,960,176C1120,160,1280,192,1360,208L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
              </svg>
            </Box>
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default Header;
