import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  // pass just the path, you can also extend with options (state, replace, etc.)
  const navigateTo = (path, options = {}) => {
    navigate(path, options);
  };

  return navigateTo;
};

export default useNavigation;
