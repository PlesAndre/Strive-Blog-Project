import mongoose from "mongoose";

// mongoose.Schema({}) = crea uno schema che definisce la struttura dei dati che memorizza il DB. Specifica che tipo di informazioni ci sono in ogni documento, si intende coppia "chiave": "valore"
const authorSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  email: String,
  data_di_nascita: String,
  avatar: String,
});

// mongoose.model = crea un modello chiamato "Author" che rappresenta lo schema che permette di interagire con i dati nel DB
// "authors" = nome del modello che crea una collezione dove verranno salvati i dati, si intende un file {JSON} che contiene i documenti
// authorSchema = definisce come dovrebbere essere strutturati i dati
const Author = mongoose.model("authors", authorSchema);

export default Author;
