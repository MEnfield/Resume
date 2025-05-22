import {
  Box,
  Grid,
  IconButton,
  Link,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { DesignServices, GitHub } from "@mui/icons-material";

const ProjectCard: FC<{
  title: string;
  description: string;
  githubUrl: string;
  figmaUrl: string;
  previewUrl: string;
}> = ({ title, description, githubUrl, figmaUrl, previewUrl }) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Paper
      sx={{
        p: (theme) => theme.spacing(2, 4),
        borderRadius: 4,
        backgroundColor: "secondary.main",
        height: "100%",
      }}
      elevation={2}
    >
      <Grid container direction="column" gap={2}>
        <Grid container direction="row">
          <Grid size="grow">
            <Typography
              fontSize={32}
              lineHeight="36px"
              fontWeight="bold"
              color="white.main"
            >
              {title}
            </Typography>
          </Grid>
          <Grid container direction="row" alignItems="center" gap={1}>
            {!!githubUrl && (
              <Grid>
                <Tooltip
                  placement="top"
                  arrow
                  title="View this project's code repository on GitHub"
                  sx={{
                    "& .MuiTooltip-arrow": { color: "secondary.main" },
                  }}
                >
                  <Link href={githubUrl}>
                    <IconButton
                      sx={{
                        bgcolor: "white.main",
                        "&:hover": {
                          bgcolor: "accent.main",
                          color: "white.main",
                        },
                      }}
                      color="secondary"
                    >
                      <GitHub />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
            )}
            {!!figmaUrl && (
              <Grid>
                <Tooltip
                  placement="top"
                  arrow
                  title="View the design file I created for this project"
                  sx={{
                    "& .MuiTooltip-arrow": { color: "secondary.main" },
                  }}
                >
                  <Link href={figmaUrl}>
                    <IconButton
                      sx={{
                        bgcolor: "white.main",
                        "&:hover": {
                          bgcolor: "accent.main",
                          color: "white.main",
                        },
                      }}
                      color="secondary"
                    >
                      <DesignServices />
                    </IconButton>
                  </Link>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid>
          <Box
            height={250}
            width="100%"
            textAlign="center"
            bgcolor="accent.main"
            borderRadius="3px"
          >
            <img src={previewUrl} height="100%" />
          </Box>
        </Grid>
        <Grid>
          <Typography fontSize={20} lineHeight="24px" color="white.main">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
