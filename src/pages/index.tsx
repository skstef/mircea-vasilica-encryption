import Link from "next/link";
import {
  Button,
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: "center" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Mircea & Vasilica Encryption
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Criptați și decriptați mesajele sigur și cu ușurință prin
            <br />
            <b>Algoritmul Mircea și Vasilica.</b>
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ mt: 4 }}
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
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
