import { Box, Link, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import FAULogo from "../assets/florida_atlantic_university_logo.svg";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { education } from "../data/data";

const Education: FC = () => (
  <Section id="education" label="Education">
    <Reveal>
      <Paper
        variant="outlined"
        sx={{ p: { xs: 2.5, md: 3.5 }, borderRadius: 3, maxWidth: 720 }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Link href={education.url} target="_blank" rel="noreferrer">
            <Box
              component="img"
              src={FAULogo}
              alt="Florida Atlantic University"
              sx={{ height: 56, width: "auto", borderRadius: "3px" }}
            />
          </Link>
          <Box>
            <Link
              href={education.url}
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="text.primary"
            >
              <Typography variant="h3" sx={{ fontSize: "1.35rem" }}>
                {education.school}
              </Typography>
            </Link>
            <Typography sx={{ mt: 0.5, color: "text.secondary" }}>
              {education.degree}
            </Typography>
            <Typography
              variant="eyebrow"
              component="p"
              sx={{ mt: 0.75, color: "text.secondary" }}
            >
              {education.time}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Reveal>
  </Section>
);

export default Education;
