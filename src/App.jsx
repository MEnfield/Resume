import { Box, Grid } from "@mui/material";
import Header from "./views/Header";
import AboutMe from "./views/AboutMe";
import SideNav from "./Views/SideNav";
import WorkExperience from "./views/WorkExperience";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Education from "./views/Education";
import Footer from "./views/Footer";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const drawerWidth = "96px";
  const headerRef = useRef(null);

  const [headerOffset, setHeaderOffset] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (headerRef) {
      setHeaderOffset(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      component="main"
      minHeight="100vh"
      backgroundColor="background.default"
      paddingTop={`${headerOffset}px`}
    >
      <SideNav drawerWidth={drawerWidth} />
      <Grid container direction="column" pl={drawerWidth}>
        <Grid>
          <Header
            headerRef={headerRef}
            drawerWidth={drawerWidth}
            isScrolling={isScrolling}
          />
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
        <Grid>
          <Skills />
        </Grid>
        <Grid>
          <Education />
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
