// Pacchetti da installare dal terminale
// npm init -y = inizializza una cartella npm
// npm install nodemon --save -dev = refresh automatico del DB (--save -dev, lo installa temporaneamente, solo per il progetto in locale)
// npm install express = installa il framewrok Express.js, facilita la creazione dei server con Node.js
// npm install mongoose = installa mongoose per il DB
// npm cors = autorizzazione tra FE e BE
// npm install dotenv = consente di importare dal file .env

// Cosa cambiare nel package.json (BE)
// "main" : "server.js" = BE iniziliazzata su server.js
// "start" : "nodemon server.js"
// "type" : "module" = si può usare "import" al posto di "const"
// senza "module" sarebbe "const express = require("express")

// Importa Express.js, framework che facilita la creazione dei server con Node.js
import express from "express";

// Importa "cors" che permette la comunicazione tra FE e DB
import cors from "cors";

// Importa il file di connessione al DB
import connectDB from "./config/db.js";

// Crea il server con express()
const server = express();

// Di default il server express() non interpreta il JSON, quindi bisogna specificarlo
server.use(express.json());

server.use(cors());

// Specifica della "port" per il backend
const port = 3001;

// Chiama la funzione per connettersi al DB
connectDB();

// // Come chiamare i dati nella BE
// const consoleAuthors = async () => {
//   const consAuth = await getAllAuthors();
//   console.log(consAuth);
// };
// consoleAuthors();

// Server per avviare il server e "ascoltare" una porta specifica, in questo caso "3001", in modo che sia pronta a ricevere e gestire richieste
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
