import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Snackbar,
  Alert,
  Stack,
  Grid,
} from "@mui/material";
import { LockOpen as LockOpenIcon } from "@mui/icons-material";
import { MuiFileInput } from "mui-file-input";
import { decrypt } from "@/utils/decrypt";

export default function DecryptionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [key, setKey] = useState("");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleFileUpload = (file: File | null) => {
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setMessage(text);
      };
      reader.readAsText(file);
    } else {
      setMessage("");
    }
  };

  const handleDecrypt = () => {
    if (!key || !message) {
      setError("Vă rugăm să furnizați o cheie și un mesaj.");
      return;
    }

    setLoading(true);
    try {
      const decryptedMessage = decrypt(message, key);
      setOutput(decryptedMessage);
      setSuccess("Mesajul a fost decriptat cu succes!");
    } catch {
      setError("Decriptarea a eșuat. Vă rugăm să verificați intrările.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        <LockOpenIcon
          fontSize="large"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Decriptare
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
                Date Intrare
              </Typography>
              <Stack spacing={3}>
                <MuiFileInput
                  value={file}
                  onChange={handleFileUpload}
                  label="Încărcați fișierul text"
                  inputProps={{ accept: ".txt" }}
                  fullWidth
                  placeholder="Alegeți un fișier"
                />
                <TextField
                  label="Cheia de decriptare"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  label="Mesaj"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button
                  variant="contained"
                  onClick={handleDecrypt}
                  disabled={loading}
                  startIcon={
                    loading ? <CircularProgress size={20} /> : <LockOpenIcon />
                  }
                >
                  {loading ? "Se decriptează..." : "Decriptează"}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
                Date Ieșire
              </Typography>
              <TextField
                value={output}
                multiline
                rows={4}
                fullWidth
                InputProps={{ readOnly: true }}
                placeholder="Mesajul decriptat va apărea aici"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Snackbar
        open={!!success}
        autoHideDuration={6000}
        onClose={() => setSuccess("")}
      >
        <Alert severity="success">{success}</Alert>
      </Snackbar>
    </Container>
  );
}
