import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQs from "./pages/FAQ";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import { careersLoader, careerDetailsLoader } from "./utils/Utilities";
import CareerDetails from "./pages/CareerDetails";
import CareersError from "./pages/CareersError";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route index element={<Help />} />
        <Route path="faq" element={<FAQs />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box className="App">
            {/* <Navbar /> */}
            <Container sx={{ mt: 8, height: "90vh" }}>
              <RouterProvider router={router} />
            </Container>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
