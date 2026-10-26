import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Download, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { FC } from "react";
import Headshot from "../assets/headshot.png";
import ResumePdf from "../assets/Resume.pdf";
import { profile } from "../data/data";
import Reveal from "../components/Reveal";

const Hero: FC = () => (
  <Box
    component="header"
    id="about"
    sx={(theme) => ({
      position: "relative",
      overflow: "hidden",
      pt: { xs: 12, md: 16 },
      pb: { xs: 7, md: 10 },
      // soft brand wash instead of the old hard teal gradient + wave.
      // Hex literals per scheme: under cssVariables, palette.primary.main
      // resolves to the light value only, so it would not adapt on its own.
      background: `radial-gradient(1100px 460px at 12% -12%, #1A5FB41F, transparent 62%),
         radial-gradient(900px 420px at 88% 0%, #1A5FB414, transparent 60%)`,
      ...theme.applyStyles("dark", {
        background: `radial-gradient(1100px 460px at 12% -12%, #6BA6F526, transparent 62%),
           radial-gradient(900px 420px at 88% 0%, #6BA6F517, transparent 60%)`,
      }),
    })}
  >
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Reveal>
            <Typography variant="eyebrow" component="p" color="primary.main">
              {profile.location} · Available for senior roles
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mt: 1.5,
                fontSize: { xs: "2.5rem", sm: "3.25rem", md: "3.75rem" },
                lineHeight: 1.05,
              }}
            >
              {profile.name}
            </Typography>
            <Typography
              variant="h2"
              component="p"
              sx={{
                mt: 1.5,
                fontSize: { xs: "1.05rem", md: "1.3rem" },
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              {profile.title}
              <Box component="span" sx={{ color: "text.secondary", mx: 1 }}>
                ·
              </Box>
              <Box component="span" sx={{ color: "text.secondary" }}>
                {profile.subtitle}
              </Box>
            </Typography>
            <Typography
              sx={{
                mt: 3,
                maxWidth: 680,
                fontSize: { xs: "1rem", md: "1.075rem" },
                lineHeight: 1.7,
                color: "text.secondary",
              }}
            >
              {profile.summary}
            </Typography>
          </Reveal>

          <Reveal delay={120}>
            <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                startIcon={<Download />}
                component="a"
                href={ResumePdf}
                download="Mitchell Enfield - Resume.pdf"
              >
                Download resume
              </Button>
              <Button
                variant="outlined"
                startIcon={<Mail />}
                component="a"
                href={`mailto:${profile.email}`}
              >
                Email me
              </Button>
              <Button
                variant="text"
                startIcon={<GitHub />}
                component="a"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="text"
                startIcon={<LinkedIn />}
                component="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Button>
            </Stack>
          </Reveal>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Reveal delay={160}>
            <Box
              sx={{
                position: "relative",
                width: { xs: 200, md: 268 },
                mx: { xs: "auto", md: 0 },
                ml: { md: "auto" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  transform: "translate(14px, 14px)",
                  borderRadius: "28px",
                  border: 2,
                  borderColor: "primary.main",
                  opacity: 0.45,
                }}
              />
              <Box
                component="img"
                src={Headshot}
                alt={`${profile.name}, ${profile.title}`}
                sx={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: "28px",
                  bgcolor: "action.hover",
                }}
              />
            </Box>
          </Reveal>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Hero;
