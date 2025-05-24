import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import Headshot from "../assets/headshot.png";

const AboutMe: FC = ({}) => {
  // Component variables
  const yearsWorking = new Date().getFullYear() - 2016;

  // Component state

  // Component effects

  // Function binding

  return (
    <Box
      component="section"
      id="about-me"
      sx={(theme) => ({
        p: theme.spacing(8, 12),
        [theme.breakpoints.down("md")]: {
          p: (theme) => theme.spacing(2, 2, 0, 2),
        },
      })}
    >
      <Grid container direction="row" gap={12}>
        <Grid
          container
          direction="column"
          alignItems="center"
          gap={2}
          size="grow"
        >
          <Grid>
            <Typography color="secondary.main" variant="sectionHeader">
              Hey there!
            </Typography>
            <Typography pl={2} color="text.primary" variant="sectionHeader">
              I'm Mitchell.
            </Typography>
          </Grid>
          <Grid>
            <Typography
              textAlign="center"
              component="span"
              fontSize="24px"
              lineHeight="32px"
              display="grid"
              place-items="center"
            >
              I'm a Senior Web Developer from Saint Johns in Florida with{" "}
              {yearsWorking} years of experience in crafting exceptional user
              experiences and interfaces. Skilled in UI/UX design principles,
              with a keen eye for detail and a passion for creating intuitive
              and engaging digital products. Proficient in full-stack JavaScript
              development, with expertise in both front-end and back-end
              technologies. With a strong foundation in HTML, CSS, and
              JavaScript, I excel in building responsive, scalable, and
              maintainable web applications. My expertise extends to designing
              and developing complex web applications, with a focus on
              delivering seamless user experiences across various devices and
              platforms. I thrive in collaborative environments, working closely
              with cross-functional teams to bring innovative ideas to life.
              With a proven track record of delivering high-quality projects on
              time, I am a dedicated and results-driven professional who is
              passionate about staying up-to-date with the latest technologies
              and trends in the industry.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          sx={{
            position: "relative",
            animation: "float 3s ease-in-out infinite 0.5s, fadeInScale 0.5s",
          }}
        >
          <Box
            sx={{
              height: 275,
              width: 275,
              backgroundColor: "tertiary.main",
              borderRadius: 50,
              position: "relative",
              zIndex: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "250px",
                borderRadius: 250,
                width: "250px",
                backgroundColor: "secondary.main",
              }}
            >
              <img
                src={Headshot}
                style={{
                  maxHeight: "100%",
                  width: "100%",
                  borderRadius: 250,
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              top: 10,
              left: 10,
              height: 275,
              width: 275,
              backgroundColor: "accent.main",
              borderRadius: 50,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
