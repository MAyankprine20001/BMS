import { useEffect } from "react";
import { getCurrentUser } from "../../apiCalls/user";
import useNavigation from "../../hooks/useNavigation";

const Home = () => {
  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     const response = await getCurrentUser();
  //     console.log(".op", response);
  //     if (!response.success) {
  //       navigateTo("/login");
  //     }
  //   };

  //   fetchCurrentUser();
  // }, []);
  return (
    <h1
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "3rem",
      }}
    >
      Home Page
    </h1>
  );
};

export default Home;
