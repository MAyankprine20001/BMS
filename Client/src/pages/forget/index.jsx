import { Button, Form, Input } from "antd";
import Link from "antd/es/typography/Link";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    // Add logic here to send a password reset link
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <main className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <section>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Forgot Password
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Enter your email to receive a reset link.
          </p>
        </section>
        <section>
          <Form layout="vertical" onFinish={onFinish} autoComplete="off">
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

            <Form.Item className="mt-6">
              <Button
                type="primary"
                block
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md h-11 text-base"
              >
                Send Reset Link
              </Button>
            </Form.Item>
          </Form>
        </section>
        <div className="mt-4 text-center text-gray-500">
          <p className="text-sm">
            Remembered your password?{" "}
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

export default ForgotPassword;
