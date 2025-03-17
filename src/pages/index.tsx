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
            Encryption/Decryption App
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Encrypt and decrypt your text files easily. Select an option below
            to get started.
          </Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Link href="/encryption" passHref>
              <Button variant="contained" size="large" sx={{ px: 5 }}>
                Encryption
              </Button>
            </Link>
            <Link href="/decryption" passHref>
              <Button variant="contained" size="large" sx={{ px: 5 }}>
                Decryption
              </Button>
            </Link>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
