import { Box, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import FAULogo from "../assets/florida_atlantic_university_logo.svg";
import { Waypoint } from "react-waypoint";
import Animation from "../components/Animation";

const Education: FC = ({}) => {
  // Component variables
  const [isInViewport, setIsInViewport] = useState(false);

  // Component state

  // Component effects

  // Function binding

  return (
    <Waypoint onEnter={() => setIsInViewport(true)}>
      <div>
        <Box
          component="section"
          id="education"
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
              <Animation
                animationName="fadeInScale"
                duration={500}
                beforeStyle={{ opacity: 0 }}
                doneStyle={{ opacity: 1 }}
                shouldAnimate={isInViewport}
                element={
                  <Grid>
                    <Typography variant="sectionHeader" color="accent">
                      My Education
                    </Typography>
                  </Grid>
                }
              />
            </Grid>

            <Animation
              animationName="fadeInScale"
              duration={350}
              delay={200}
              beforeStyle={{ opacity: 0 }}
              doneStyle={{ opacity: 1 }}
              shouldAnimate={isInViewport}
              element={
                <Grid container direction="row" justifyContent="center" gap={4}>
                  <Grid>
                    <Link href="https://www.fau.edu/" color="#013366">
                      <img
                        style={{ borderRadius: "3px" }}
                        src={FAULogo}
                        alt="FAU-logo"
                      />
                    </Link>
                  </Grid>
                  <Grid container direction="column">
                    <Grid>
                      <Link href="https://www.fau.edu/" color="#013366">
                        <Typography
                          fontSize={32}
                          lineHeight="36px"
                          fontWeight="bold"
                          color="#013366"
                        >
                          Florida Atlantic University
                        </Typography>
                      </Link>
                    </Grid>
                    <Grid>
                      <Typography fontSize={24} color="#013366">
                        Bachelor of Science in Computer Science (BSCS)
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        fontSize={20}
                        fontStyle="italic"
                        lineHeight="24px"
                        color="#013366"
                      >
                        2012 - 2016
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              }
            />
          </Grid>
        </Box>
      </div>
    </Waypoint>
  );
};

export default Education;
