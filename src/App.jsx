import { Box, Grid } from "@mui/material";
import Header from "./views/Header";
import AboutMe from "./views/AboutMe";
import SideNav from "./Views/SideNav";
import WorkExperience from "./views/WorkExperience";
import Projects from "./views/Projects";

function App() {
  const drawerWidth = "96px";

  return (
    <Box
      component="main"
      minHeight="100vh"
      backgroundColor="background.default"
    >
      <SideNav drawerWidth={drawerWidth} />
      <Grid container direction="column" pl={drawerWidth}>
        <Grid>
          <Header />
        </Grid>
        <Grid>
          <AboutMe />
        </Grid>
        <Grid>
          <WorkExperience />
        </Grid>
        <Grid>
          <Projects />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
