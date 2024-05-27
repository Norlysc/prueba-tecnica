import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function Books({ books }) {
  return (
    <ImageList sx={{ width: 800, height: 800 }}>
      {books.map((book) => (
        <ImageListItem key={book.cover}>
          <img
            srcSet={`${book.cover}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${book.cover}?w=248&fit=crop&auto=format`}
            alt={book.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={book.title}
            subtitle={<span>{book.releaseDate}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
