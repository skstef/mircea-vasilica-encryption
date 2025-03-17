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
      setError("Please provide a key and message.");
      return;
    }

    setLoading(true);
    try {
      const decryptedMessage = decrypt(message, key);
      setOutput(decryptedMessage);
      setSuccess("Message decrypted successfully!");
    } catch {
      setError("Decryption failed. Please check your inputs.");
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
        Decryption
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Input
              </Typography>
              <Stack spacing={3}>
                <MuiFileInput
                  value={file}
                  onChange={handleFileUpload}
                  label="Upload Text File"
                  inputProps={{ accept: ".txt" }}
                  fullWidth
                  placeholder="Choose a file"
                />
                <TextField
                  label="Decryption Key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  label="Message"
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
                  {loading ? "Decrypting..." : "Decrypt"}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Output
              </Typography>
              <TextField
                value={output}
                multiline
                rows={4}
                fullWidth
                InputProps={{ readOnly: true }}
                placeholder="Decrypted message will appear here"
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
