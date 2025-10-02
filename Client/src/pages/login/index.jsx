import { Button, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import { loginUser } from "../../apiCalls/user";
import toastHelper from "../../utils/toastShower/toastHelper";
import useNavigation from "../../hooks/useNavigation";

const Login = () => {
  const navigateTo = useNavigation();
  const onFinish = async (values) => {
    const payload = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );
    try {
      const response = await loginUser(payload);
      console.log("Registration response: ", response);
      if (response.success) {
        toastHelper.success(response.message);
        navigateTo("/home");
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));
      }
    } catch (error) {
      console.error("Registration error: ", error);
      toastHelper.error(error.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <main className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <section>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Login to BMS
          </h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
              label={<span className="font-semibold text-gray-600">Email</span>}
              name={"email"}
              rules={[
                { required: true, message: "Email is required" },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
            >
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="font-semibold text-gray-600">Password</span>
              }
              name={"password"}
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                id="password"
                placeholder="••••••••"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>
            <Form.Item className="mt-6">
              <Button
                type="primary"
                block
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md h-11 text-base"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </section>

        {/* This is the section you asked about */}
        <div className="mt-4 text-center text-gray-500 font-serif">
          <p className="text-sm">
            New User?{" "}
            <Link
              href="/register"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Register Here
            </Link>
          </p>
          <p className="text-sm mt-2">
            Forgot Password?{" "}
            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Click Here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
