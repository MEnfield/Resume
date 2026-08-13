import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import { Download, GitHub, LinkedIn, Mail, Phone } from "@mui/icons-material";
import { FC } from "react";
import ResumePdf from "../assets/Resume.pdf";
import Reveal from "../components/Reveal";
import { profile } from "../data/data";

const Footer: FC = () => (
  <Box
    component="footer"
    id="contact"
    sx={{
      scrollMarginTop: "72px",
      py: { xs: 8, md: 12 },
      borderTop: 1,
      borderColor: "divider",
      background: (theme) =>
        `radial-gradient(900px 380px at 50% 0%, ${theme.palette.primary.main}1A, transparent 65%)`,
    }}
  >
    <Container maxWidth="lg">
      <Reveal>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography variant="sectionLabel" component="p" color="primary.main">
            Contact
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontSize: { xs: "1.9rem", md: "2.5rem" } }}
          >
            Let's build something.
          </Typography>
          <Typography sx={{ maxWidth: 560, color: "text.secondary" }}>
            I'm open to senior full-stack and front-end roles. The fastest way to
            reach me is email — I answer everything.
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            gap={1.5}
            sx={{ pt: 1 }}
          >
            <Button
              variant="contained"
              startIcon={<Mail />}
              component="a"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </Button>
            <Button
              variant="outlined"
              startIcon={<Phone />}
              component="a"
              href={profile.phoneHref}
            >
              {profile.phone}
            </Button>
            <Button
              variant="outlined"
              startIcon={<Download />}
              component="a"
              href={ResumePdf}
              download="Mitchell Enfield - Resume.pdf"
            >
              Resume
            </Button>
          </Stack>

          <Stack direction="row" gap={1} sx={{ pt: 0.5 }}>
            <Button
              size="small"
              startIcon={<GitHub />}
              component="a"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              GitHub
            </Button>
            <Button
              size="small"
              startIcon={<LinkedIn />}
              component="a"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              LinkedIn
            </Button>
          </Stack>

          <Divider flexItem sx={{ pt: 2, borderColor: "transparent" }} />
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} {profile.name} · Built with React, MUI,
            and Vite
          </Typography>
        </Stack>
      </Reveal>
    </Container>
  </Box>
);

export default Footer;
