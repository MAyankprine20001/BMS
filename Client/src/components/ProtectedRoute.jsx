import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNavigation from "../hooks/useNavigation";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { getCurrentUser } from "../apiCalls/user";
import { setUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigation();

  const navItems = [
    {
      label: "Home",
      icon: <HomeOutlined />,
    },
    {
      label: `${!!user ? user.name : ""}`,
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <span
              onClick={() => {
                if (user.role === "admin") {
                  navigateTo("/admin");
                } else if (user.role === "partner") {
                  navigateTo("/partner");
                } else {
                  navigateTo("/profile");
                }
              }}
            >
              {" "}
              My Profile
            </span>
          ),
          icon: <ProfileOutlined />,
        },
        {
          label: (
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
                navigateTo("/login");
                dispatch(setUser(null));
              }}
            >
              Logout
            </Link>
          ),
          icon: <LogoutOutlined />,
        },
      ],
    },
  ];

  useEffect(() => {
    const getUserData = async () => {
      try {
        dispatch(showLoading());
        const response = await getCurrentUser();

        if (response.status === 401) {
          localStorage.removeItem("token");
          navigateTo("/login");
        } else {
          dispatch(setUser(response.data));
        }
      } catch (error) {
        dispatch(setUser(null));
      } finally {
        dispatch(hideLoading());
      }
    };
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigateTo("/login");
    }
  }, []);

  return (
    <div>
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
            Book My Show{" "}
          </h3>
          <div style={{ marginLeft: "auto" }}>
            <Menu theme="dark" mode="horizontal" items={navItems} />
          </div>
        </Header>
        <div>{children}</div>
      </Layout>
    </div>
  );
}
export default ProtectedRoute;
