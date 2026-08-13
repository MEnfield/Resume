import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * One titled page section. The uppercase mono label with an accent underline is the
 * same treatment used for section headings in the PDF resume.
 */
const Section: FC<{
  id: string;
  label: string;
  title?: string;
  intro?: ReactNode;
  tinted?: boolean;
  children: ReactNode;
}> = ({ id, label, title, intro, tinted = false, children }) => (
  <Box
    component="section"
    id={id}
    sx={{
      scrollMarginTop: "72px",
      py: { xs: 7, md: 11 },
      bgcolor: tinted ? "action.hover" : "background.default",
      borderTop: 1,
      borderColor: "divider",
    }}
  >
    <Container maxWidth="lg">
      <Reveal>
        <Stack spacing={1.25} sx={{ mb: { xs: 4, md: 5 } }}>
          <Box>
            <Typography
              variant="sectionLabel"
              component="p"
              color="primary.main"
            >
              {label}
            </Typography>
            <Box
              sx={{
                mt: 0.75,
                width: 44,
                height: 3,
                borderRadius: 2,
                bgcolor: "primary.main",
              }}
            />
          </Box>
          {title && (
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" } }}
            >
              {title}
            </Typography>
          )}
          {intro && (
            <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
              {intro}
            </Typography>
          )}
        </Stack>
      </Reveal>
      {children}
    </Container>
  </Box>
);

export default Section;
