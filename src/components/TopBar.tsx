import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import {
  LockOutlined as LockIcon,
  LockOpen as LockOpenIcon,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import appIcon from "../assets/icon.svg";

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
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Image
              width={24}
              priority
              src={appIcon}
              alt="Criptarea lui Mircea și Vasilica"
            />
            Home
          </Typography>

          {/* Navigation Links */}
          <nav>
            <ul style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
