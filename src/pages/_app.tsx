import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "../components/TopBar";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <Box sx={{ pt: 3, mb: 4 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
