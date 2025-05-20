import { Divider, Grid, Paper, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import SimplifiLogo from "../assets/simplifi_logo.svg";

const WorkCard: FC<{
  title: string;
  company: string;
  time: string;
  description: string;
  icon: ReactElement;
}> = ({ title, company, time, description, icon }) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Paper
      sx={{ p: (theme) => theme.spacing(2, 4), borderRadius: 4 }}
      elevation={2}
    >
      <Grid container direction="column" gap={3}>
        <Grid container direction="row" alignItems="center" gap={2}>
          {!!icon && <Grid>{icon}</Grid>}
          <Grid>
            <Typography
              color="secondary"
              fontWeight="bold"
              fontSize={32}
              lineHeight="36px"
            >
              {company}
            </Typography>
          </Grid>
          <Grid>
            <Divider orientation="vertical" sx={{ height: "32px" }} />
          </Grid>
          <Grid container direction="column">
            <Grid>
              <Typography
                color="secondary"
                fontWeight="bold"
                fontSize={20}
                lineHeight="24px"
              >
                {title}
              </Typography>
            </Grid>
            <Grid>
              <Typography
                fontStyle="italic"
                color="secondary"
                fontSize={16}
                lineHeight="18px"
              >
                {time}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Typography fontSize={20} lineHeight="24px" color="text.primary">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WorkCard;
