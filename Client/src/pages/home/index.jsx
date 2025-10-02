import { useEffect } from "react";
import { getCurrentUser } from "../../apiCalls/user";
import useNavigation from "../../hooks/useNavigation";

const Home = () => {
  const navigateTo = useNavigation();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await getCurrentUser();
      console.log(".op",response);
      if (!response.success) {
        navigateTo("/login");
      }
    };

    fetchCurrentUser();
  }, []);
  return <h1>Home Page</h1>;
};

export default Home;
