import { Box, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Realizat de{" "}
        <Link
          href="https://github.com/skstef"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          Stef S.
        </Link>
        {"  "}
        🇲🇩⚔️🌙
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Link
          href="https://github.com/skstef"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHubIcon fontSize="small" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/skstef/"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <LinkedInIcon fontSize="small" />
        </Link>
      </Stack>
    </Box>
  );
}
