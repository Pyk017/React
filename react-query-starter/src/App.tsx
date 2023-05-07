import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import RootLayout from "./layouts/RootLayout";

import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="superheroes" element={<SuperHeroes />} />
      <Route path="rq-superheroes" element={<RQSuperHeroes />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
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
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <Box className="App">
              <Container sx={{ mt: 8, height: "90vh" }}>
                <RouterProvider router={router} />
              </Container>
            </Box>
          </ThemeProvider>
        </ColorModeContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;
