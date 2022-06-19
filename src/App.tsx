import { routes, PrivatePage } from "@/routes";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "@/theme";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {Object.values(routes).map(
            ({ path, isPrivate, component: Component }) => {
              const element = isPrivate ? (
                <PrivatePage>
                  <Component />
                </PrivatePage>
              ) : (
                <Component />
              );

              return <Route key={path} path={path} element={element} />;
            }
          )}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
