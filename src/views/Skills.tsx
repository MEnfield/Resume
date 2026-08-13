import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { skillGroups } from "../data/data";

const Skills: FC = () => (
  <Section id="skills" label="Skills" title="What I work with" tinted>
    <Grid container spacing={{ xs: 3, md: 4 }}>
      {skillGroups.map((group, index) => (
        <Grid key={group.label} size={{ xs: 12, md: 6 }}>
          <Reveal delay={index * 60}>
            <Box>
              <Typography
                variant="sectionLabel"
                component="h3"
                color="text.secondary"
              >
                {group.label}
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
                sx={{ mt: 1.5, mb: 1 }}
              >
                {group.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    variant="outlined"
                    sx={{
                      bgcolor: "background.paper",
                      borderColor: "divider",
                      "&:hover": {
                        borderColor: "primary.main",
                        color: "primary.main",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Reveal>
        </Grid>
      ))}
    </Grid>
  </Section>
);

export default Skills;
