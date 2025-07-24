import React from "react";
import useGenres from "../hooks/UseGenres";
const GenreList = () => {
  const { data } = useGenres(); // prop called data
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
