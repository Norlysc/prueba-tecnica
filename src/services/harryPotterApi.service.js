export async function getBooks({ error }) {
  try {
    const url = error
      ? "https://potterapi-fedeperin.vercel.app/es/error"
      : "https://potterapi-fedeperin.vercel.app/es/books";
    const response = await fetch(url);
    const books = await response.json();

    if (!response.ok)
      throw new Error("Ocurrió un error al consultar los datos");

    return books;
  } catch (error) {
    throw new Error(error.message);
  }
}
