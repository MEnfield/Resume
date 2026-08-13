import { Box, Chip, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { Work } from "../data/types";

const WorkCard: FC<Work> = ({
  company,
  title,
  time,
  meta,
  bullets,
  icon,
  current,
}) => (
  <Box
    sx={{
      position: "relative",
      pl: { xs: 3, md: 4.5 },
      pb: { xs: 4, md: 5 },
      // timeline rail + node
      "&:not(:last-of-type)::before": {
        content: '""',
        position: "absolute",
        left: { xs: 5, md: 7 },
        top: 18,
        bottom: 0,
        width: "2px",
        bgcolor: "divider",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 6,
        width: { xs: 12, md: 16 },
        height: { xs: 12, md: 16 },
        borderRadius: "50%",
        bgcolor: current ? "primary.main" : "background.default",
        border: 2,
        borderColor: "primary.main",
      },
    }}
  >
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", sm: "baseline" }}
      gap={0.5}
    >
      <Stack direction="row" alignItems="center" gap={1.25} flexWrap="wrap">
        {icon && (
          <Box
            component="img"
            src={icon}
            alt=""
            aria-hidden
            sx={{ height: 22, width: "auto", borderRadius: "3px" }}
          />
        )}
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: "1.2rem", md: "1.35rem" } }}
        >
          {company}
        </Typography>
        {current && (
          <Chip
            label="Current"
            size="small"
            color="primary"
            variant="outlined"
            sx={{ height: 22, fontSize: 11 }}
          />
        )}
      </Stack>
      <Typography variant="eyebrow" component="p" color="text.secondary">
        {time}
      </Typography>
    </Stack>

    <Typography
      sx={{ mt: 0.5, fontWeight: 600, color: "primary.main", fontSize: "1rem" }}
    >
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
      {meta}
    </Typography>

    <Stack component="ul" spacing={1} sx={{ mt: 2, pl: 0, listStyle: "none" }}>
      {bullets.map((bullet) => (
        <Stack
          key={bullet}
          component="li"
          direction="row"
          spacing={1.25}
          alignItems="flex-start"
        >
          <Box
            aria-hidden
            sx={{
              mt: "8px",
              flex: "0 0 auto",
              width: 5,
              height: 5,
              borderRadius: "50%",
              bgcolor: "primary.main",
            }}
          />
          <Typography
            variant="body2"
            sx={{ lineHeight: 1.65, color: "text.secondary" }}
          >
            {bullet}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

export default WorkCard;
