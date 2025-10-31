"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [useOtp, setUseOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!identifier) {
      setError("Please enter your email or mobile number first.");
      return;
    }
    
    try {
      const credentials: {
        identifier: string;
        redirect: boolean;
        password?: string;
        otp?: string;
      } = {
        identifier,
        redirect: false,
      };
      
      if (useOtp) {
        credentials.otp = otp;
      } else {
        credentials.password = password;
      }

      const result = await signIn("credentials", credentials);

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/"); // Redirect to dashboard
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  
  const handleGenerateOtp = async () => {
    setError("");
    setSuccess("");
    
    if (!identifier) {
      setError("Please enter your email or mobile number first.");
      return;
    }
    try {
      const response = await axios.post("/api/generateOtp", {
        identifier,
      });

      setSuccess(response.data.message || "OTP sent successfully!");
      setUseOtp(true); // Switch to OTP mode after generating OTP
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to generate OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        <div className="mb-4">
          <label htmlFor="identifier" className="block text-sm font-medium">
            Email or Mobile
          </label>
          <input
            id="identifier"
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        {!useOtp && (
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        )}

        {useOtp && (
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium">
              OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        )}

        <div className="mb-4">
          {useOtp ? (
            <button
              type="button"
              onClick={() => setUseOtp(false)}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            >
              Login with Password
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerateOtp}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
            >
              Login with OTP
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;