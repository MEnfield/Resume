import { Box } from "@mui/material";
import TopNav from "./views/TopNav";
import Hero from "./views/Hero";
import WorkExperience from "./views/WorkExperience";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Education from "./views/Education";
import Footer from "./views/Footer";

const App = () => (
  <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
    <TopNav />
    <Box component="main">
      <Hero />
      <WorkExperience />
      <Projects />
      <Skills />
      <Education />
    </Box>
    <Footer />
  </Box>
);

export default App;
