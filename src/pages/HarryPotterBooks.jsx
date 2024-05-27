import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getBooks } from "../services/harryPotterApi.service";
import Spinner from "../components/Spinner";
import Books from "../components/Book";
import { useSearchParams } from "react-router-dom";
import ServerError from "../components/ServerError";
import LinkButton from "../components/LinkButton";
import { ROUTES } from "../constants/routes";

export default function HarryPotterBooks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const error = searchParams.get("error");
    setIsLoading(true);
    getBooks({ error })
      .then((books) => setBooks(books))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container
      sx={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LinkButton path={ROUTES.home} text={"Ir al TO-DO"} />
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <ServerError message={error.message} />
      ) : (
        <Books books={books} />
      )}
    </Container>
  );
}
