import { Button, Form, Input, Radio } from "antd";
import Link from "antd/es/typography/Link";
import { registerUser } from "../../apiCalls/user";
import toastHelper from "../../utils/toastShower/toastHelper";
import useNavigation from "../../hooks/useNavigation";

const Register = () => {
  const navigateTo = useNavigation();
  const onFinish = async (values) => {
    const payload = Object.fromEntries(
      Object.entries(values).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );
    try {
      const response = await registerUser(payload);
      console.log("Registration response: ", response);
      if (response.success) {
        toastHelper.success(response.message || "Registration successful");
        navigateTo("/login");
      }
    } catch (error) {
      console.error("Registration error: ", error);
      toastHelper.error(error.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <main className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <section>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Register to BMS
          </h1>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
              label={<span className="font-semibold text-gray-600">Name</span>}
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
            >
              <Input
                placeholder="Enter your name"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label={<span className="font-semibold text-gray-600">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="you@example.com"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold text-gray-600">Password</span>
              }
              name="password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password
                placeholder="••••••••"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="font-semibold text-gray-600">
                  Confirm Password
                </span>
              }
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The two passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="••••••••"
                className="h-10 px-4 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              name="role"
              htmlFor="role"
              label={
                <span className="font-semibold text-gray-600">
                  Register as a Partner
                </span>
              }
              initialValue={"user"}
              rules={[{ required: true, message: "Please select an option" }]}
            >
              <Radio.Group>
                <Radio value={"partner"}>Yes</Radio>
                <Radio value="user">No</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item className="mt-6">
              <Button
                type="primary"
                block
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md h-11 text-base"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </section>
        <div className="mt-4 text-center text-gray-500">
          <p className="text-sm">
            Already a user?{" "}
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Login Here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
