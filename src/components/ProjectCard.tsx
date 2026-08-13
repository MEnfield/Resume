import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DesignServices, GitHub, Launch } from "@mui/icons-material";
import { FC } from "react";
import { Project } from "../data/types";

const ProjectCard: FC<Project> = ({
  title,
  tagline,
  description,
  stack,
  liveUrl,
  githubUrl,
  figmaUrl,
  featured,
}) => (
  <Paper
    variant="outlined"
    sx={(theme) => ({
      height: "100%",
      p: { xs: 2.5, md: featured ? 4 : 3 },
      borderRadius: 3,
      borderColor: featured ? "primary.main" : "divider",
      display: "flex",
      flexDirection: "column",
      transition: "transform .2s ease, box-shadow .2s ease",
      "&:hover": {
        transform: "translateY(-3px)",
        boxShadow: "0 12px 32px #1A5FB41F",
      },
      ...theme.applyStyles("dark", {
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 12px 32px #6BA6F529",
        },
      }),
    })}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      gap={1}
    >
      <Box>
        <Stack direction="row" alignItems="center" gap={1} flexWrap="wrap">
          <Typography
            variant="h3"
            sx={{ fontSize: featured ? "1.6rem" : "1.25rem" }}
          >
            {title}
          </Typography>
          {featured && (
            <Chip
              label="Live"
              size="small"
              color="primary"
              sx={{ height: 22, fontSize: 11 }}
            />
          )}
        </Stack>
        <Typography
          variant="eyebrow"
          component="p"
          color="primary.main"
          sx={{ mt: 0.75 }}
        >
          {tagline}
        </Typography>
      </Box>
    </Stack>

    <Typography
      variant="body2"
      sx={{ mt: 2, lineHeight: 1.7, color: "text.secondary", flexGrow: 1 }}
    >
      {description}
    </Typography>

    <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2.5 }}>
      {stack.map((tech) => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          variant="outlined"
          sx={{ fontSize: 12 }}
        />
      ))}
    </Stack>

    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 2.5 }}>
      {liveUrl && (
        <Button
          size="small"
          variant="contained"
          startIcon={<Launch />}
          component="a"
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit site
        </Button>
      )}
      {githubUrl && (
        <Button
          size="small"
          variant="outlined"
          startIcon={<GitHub />}
          component="a"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </Button>
      )}
      {figmaUrl && (
        <Button
          size="small"
          variant="text"
          startIcon={<DesignServices />}
          component="a"
          href={figmaUrl}
          target="_blank"
          rel="noreferrer"
        >
          Design
        </Button>
      )}
    </Stack>
  </Paper>
);

export default ProjectCard;
