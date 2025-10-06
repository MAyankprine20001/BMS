import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MovieList from "./MovieLists";
import ThretreTable from "./ThretreTable";
import { Tabs } from "antd";

function Admin() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const tabItems = [
    {
      key: "1",
      label: "Movies",
      children: <MovieList />,
    },
    {
      key: "2",
      label: "Theatres",
      children: <ThretreTable />,
    },
  ];

  useEffect(() => {
    if (user !== "null" && user?.role !== "admin") {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen">
      <div className="bg-gray-800 text-white py-4 px-6 shadow-md">
        <h1 className="text-2xl font-bold m-0">Admin Page</h1>
      </div>
      <Tabs items={tabItems} className="mt-0" />
    </div>
  );
}

export default Admin;
