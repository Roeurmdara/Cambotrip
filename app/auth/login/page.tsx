"use client";
import { useState } from "react";

// Mock login action for demo
async function loginAction(email: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (email === "demo@example.com" && password === "password") {
    return { success: true };
  }
  return { error: "Invalid credentials" };
}

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    setError("");
    setLoading(true);
    
    const res = await loginAction(email, password);
    
    setLoading(false);
    
    if (res?.error) {
      setError(res.error);
    } else {
      setError("");
      alert("Login successful!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-sm px-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-light text-neutral-900 text-center">
            Login
          </h1>

          {error && (
            <div className="text-sm text-red-600 text-center bg-red-50 py-2 px-4 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-neutral-900 transition-colors"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-neutral-900 transition-colors"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-neutral-900 text-white py-3 rounded hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-xs text-neutral-500 text-center mt-4">
            Demo: demo@example.com / password
          </p>
        </div>
      </div>
    </div>
  );
}