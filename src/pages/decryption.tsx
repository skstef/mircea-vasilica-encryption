import React, { useState } from "react";
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
import {
  LockOpen as LockOpenIcon,
  Download as DownloadIcon,
} from "@mui/icons-material";
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

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFile(null);
    setMessage(e.target.value);
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setKey(e.target.value);
  };

  const handleDownloadOutput = () => {
    if (!output) {
      setError("Nu există mesaj decriptat pentru descărcare.");
      return;
    }

    // Generate file name
    const inputFileName = file
      ? file.name.replace(".txt", "")
      : "decrypted_message";
    const outputFileName = `${inputFileName}_decrypted.txt`;

    // Create a Blob with the decrypted message
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = outputFileName;
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
                  onChange={handleKeyChange}
                  fullWidth
                  required
                />
                <TextField
                  label="Mesaj"
                  value={message}
                  onChange={handleMessageChange}
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
              <Button
                variant="outlined"
                onClick={handleDownloadOutput}
                disabled={!output}
                startIcon={<DownloadIcon />}
                sx={{ mt: 2 }}
              >
                Descarcă Mesajul Decriptat
              </Button>
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
