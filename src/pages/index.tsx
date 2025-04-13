import Link from "next/link";
import {
  Button,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Head>
        <title>Criptarea lui Mircea și Vasilica</title>
      </Head>
      <Card elevation={3}>
        <CardContent>
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              width: "1px",
              height: "1px",
              padding: "0",
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              border: "0",
            }}
          >
            {"Criptarea lui Mircea și Vasilica"}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2.125rem",
              lineHeight: "1.235",
              fontWeight: 400,
              marginBottom: "0.35em",
            }}
            align="center"
            gutterBottom
          >
            Mircea & Vasilica Encryption
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Criptați și decriptați mesajele sigur și cu ușurință prin
            <br />
            <b>Algoritmul Mircea și Vasilica.</b>
          </Typography>
          <Box
            justifyContent="center"
            sx={{ display: "flex", mt: 4, flexWrap: "wrap", gap: 3 }}
          >
            <Link href="/encryption" passHref>
              <Button variant="contained" size="large" sx={{ px: 5 }}>
                Criptare
              </Button>
            </Link>
            <Link href="/decryption" passHref>
              <Button variant="contained" size="large" sx={{ px: 5 }}>
                Decriptare
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}
