# Criptare Mesaje pe Baza unui Cuvânt Cheie (Mircea şi Vasilică)

## Funcții

- [Aplicația live](#criptare-mesaj)
- [Link la funcție pentru criptare mesaj](src/utils/encrypt.ts)
- [Link la funcție pentru decriptare mesaj](src/utils/decrypt.ts)

## Descriere

Acest proiect implementează o metodă proprie de criptare a mesajelor folosind un cuvânt cheie. Mircea și Vasilică au dorit să trimită mesaje criptate, iar soluția lor se bazează pe criptarea unui mesaj utilizând un cuvânt cheie format din litere distincte.

Proiectul este structurat într-o aplicație web care permite criptarea și decriptarea mesajelor prin introducerea unui cuvânt cheie și a unui mesaj de criptat/decriptat. Utilizatorii pot încărca fișiere text și pot vizualiza mesajele criptate sau decriptate în funcție de acțiunea aleasă.

## Taskul Inițial

**Metodă proprie de criptare**

Mircea şi Vasilică vor să-şi trimită mesaje pe care alţii să nu le înţeleagă. Au citit ei despre spioni şi modalităţi de a scrie mesaje şi, în final, au imaginat un mod de criptare a unui mesaj care foloseşte “cuvânt cheie”.

Alegându-şi un cuvânt cheie format numai din litere distincte, ei numără literele acestuia şi împart mesajul în grupe de lungime egală cu numărul de litere ale cuvântului cheie, şi le aşează una sub alta. Desigur, se poate întâmpla ca ultima grupă să fie incompletă, aşa că o completează cu spaţii. Apoi numerotează literele cuvântului cheie în ordinea apariţiei lor în alfabetul englez. Fiecare cuvânt se termină cu simbol „\_”. În final, rescriu mesajul astfel: coloana de sub litera numerotată cu 1, urmată de coloana de sub litera numerotată cu 2, etc. înlocuind totodată şi spaţiile cu caracterul ‘\*’ (asterisc).

### Exemplu:

- **Cuvânt cheie**: criptam
- **Mesaj**: "Incercam sa lucram cu coduri si criptari."
- **Cuvânt cheie**: criptam (are 7 litere)
- **Numerotare**: 2635714
- **Împărțire în grupe**:
  Incerca | m sa lu | cram cu | coduri | si cri | ptari.
- **Codificare**: 2635714

### Explicații:

Mesajul original este împărțit în grupe de lungime 7 (pentru cuvântul cheie `criptam`) și rescris în ordine conform numerotării literelor din cuvântul cheie. Apoi, literele sunt plasate în coloane conform ordinii alfabetice, iar spațiile sunt înlocuite cu `*`.

## Cum să rulezi aplicația

- Clonează acest repository pe computerul tău.
- Instalează toate dependențele folosind comanda `npm install`.
- Lansează aplicația cu `npm start` și accesează aplicația în browser la `http://localhost:3000`.

### Exemplu de criptare:

- **Cuvânt cheie**: criptam
- **Mesaj**: "Incercam sa lucram cu coduri si criptari."
- **Mesaj criptat**: `clcrr._Imc**p_csaoia_auuii*_eamd*r_n*rcst_r**u ci_`

## Tehnologii folosite

- **React**: Biblioteca principală pentru dezvoltarea interfeței utilizator.
- **Material UI**: Utilizat pentru componente vizuale și stilizare.
- **mui-file-input**: Componentă pentru încărcarea fișierelor.
- **JavaScript/TypeScript**: Limbaje utilizate pentru logica aplicației.

## Licență

Acest proiect este disponibil sub licența MIT. Vezi fișierul [LICENSE](LICENSE) pentru mai multe informații.
