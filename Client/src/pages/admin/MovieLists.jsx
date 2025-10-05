import { Table } from "antd";
import React from "react";
import { data } from "react-router-dom";

const MovieLists = () => {
  const latestMovies = [
    {
      key: "1",
      poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      duration: "166 min",
      genre: "Sci-Fi, Adventure",
      language: "English",
      releaseDate: "2024-03-01",
      movieName: "Dune: Part Two",
    },
  ];

  const column = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (url) => (
        <img
          src={url}
          alt="poster"
          className="h-20 w-20 object-cover rounded-md"
        />
      ),
    },
    {
      title: "Movie Name",
      dataIndex: "movieName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration (in mins)",
      dataIndex: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Realease Date",
      dataIndex: "releaseDate",
    },
    {
      title: "Actions",
      render: () => <a>Delete</a>,
    },
    ];
    
  return (
    <div>
      <Table dataSource={latestMovies} columns={column} />
    </div>
  );
};

export default MovieLists;
