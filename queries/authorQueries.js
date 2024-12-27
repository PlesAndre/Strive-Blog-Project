// Importa lo schema su cui usare le queries
import Author from "../models/authorSchema.js";

//La querie al DB è una funzione asincrona perchè deve aspettare che ottenga tutti i dati
const getAllAuthors = async () => {
  try {
    // .find({}) = {oggetto di query vuoto} => ritorna tutti i dati
    // ritorna un array di oggetti memorizzato in "returnAll"
    const returnAll = await Author.find({});

    // Chiunque chiami la funzione permette di utilizzare i dati
    return returnAll;
  } catch (error) {
    console.log(error);
  }
};


export default getAllAuthors()