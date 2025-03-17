import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import {
  LockOutlined as LockIcon,
  LockOpen as LockOpenIcon,
} from "@mui/icons-material";
import Link from "next/link";

export default function TopBar() {
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "background.paper", boxShadow: 1 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "text.primary",
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            CryptoApp
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              component={Link}
              href="/encryption"
              startIcon={<LockIcon />}
              sx={{
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Criptare
            </Button>
            <Button
              component={Link}
              href="/decryption"
              startIcon={<LockOpenIcon />}
              sx={{
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              Decriptare
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
