import Link from "next/link";
import {
  Button,
  Container,
  Typography,
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
              fontSize: "2.125rem",
              lineHeight: "1.235",
              fontWeight: 400,
              marginBottom: "0.35em",
            }}
            align="center"
            gutterBottom
          >
            Criptarea lui Mircea și Vasilica
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
      {/* SEO Indices */}
      <p
        style={{
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
        {`Descriere
Acest proiect implementează o metodă proprie de criptare a mesajelor folosind un cuvânt cheie. Mircea și Vasilică au dorit să trimită mesaje criptate, iar soluția lor se bazează pe criptarea unui mesaj utilizând un cuvânt cheie format din litere distincte.

Proiectul este structurat într-o aplicație web care permite criptarea și decriptarea mesajelor prin introducerea unui cuvânt cheie și a unui mesaj de criptat/decriptat. Utilizatorii pot încărca fișiere text și pot vizualiza mesajele criptate sau decriptate în funcție de acțiunea aleasă.

Taskul Inițial
Metodă proprie de criptare

Mircea şi Vasilică vor să-şi trimită mesaje pe care alţii să nu le înţeleagă. Au citit ei despre spioni şi modalităţi de a scrie mesaje şi, în final, au imaginat un mod de criptare a unui mesaj care foloseşte “cuvânt cheie”.

Alegându-şi un cuvânt cheie format numai din litere distincte, ei numără literele acestuia şi împart mesajul în grupe de lungime egală cu numărul de litere ale cuvântului cheie, şi le aşează una sub alta. Desigur, se poate întâmpla ca ultima grupă să fie incompletă, aşa că o completează cu spaţii. Apoi numerotează literele cuvântului cheie în ordinea apariţiei lor în alfabetul englez. Fiecare cuvânt se termină cu simbol „_”. În final, rescriu mesajul astfel: coloana de sub litera numerotată cu 1, urmată de coloana de sub litera numerotată cu 2, etc. înlocuind totodată şi spaţiile cu caracterul ‘*’ (asterisc).

Exemplu:
Cuvânt cheie: criptam
Mesaj: "Incercam sa lucram cu coduri si criptari."
Cuvânt cheie: criptam (are 7 litere)
Numerotare: 2635714
Împărțire în grupe: Incerca | m sa lu | cram cu | coduri | si cri | ptari.
Codificare: 2635714
Mesaj criptat: clcrr._Imc**p_csaoia_auuii*_eamd*r_n*rcst_r**u ci_`}
      </p>
    </Container>
  );
}
