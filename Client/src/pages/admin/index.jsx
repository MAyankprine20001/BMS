import React, { Children, useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";
import { useSelector } from "react-redux";
import MovieLists from "./MovieLists";
import ThretreTable from "./ThretreTable";
import { Tabs } from "antd";

const Admin = () => {
  const { user } = useSelector((state) => state.user);
  const navigateTo = useNavigation();

  const tabItems = [
    {
      key: "1",
      label: "Movies",
      children: <MovieLists />,
    },
    {
      key: "2",
      label: "Theatres",
      children: <ThretreTable />,
    },
  ];

  useEffect(() => {
    if (user !== "null" && user?.role !== "admin") {
      navigateTo("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Admin Page</h1>
          <Tabs items={tabItems} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
