"use client";
import { useState } from "react";

// Mock signup action for demo
async function signupAction(name: string, email: string, password: string) {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (email === "existing@example.com") {
    return { error: "Email already exists" };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }
  return { success: true };
}

export default function SignupPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    setError("");
    setLoading(true);
    
    const res = await signupAction(name, email, password);
    
    setLoading(false);
    
    if (res?.error) {
      setError(res.error);
    } else {
      setError("");
      alert("Signup successful!");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="w-full max-w-sm px-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-light text-neutral-900 text-center">
            Sign Up
          </h1>

          {error && (
            <div className="text-sm text-red-600 text-center bg-red-50 py-2 px-4 rounded">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full px-4 py-3 border border-neutral-300 rounded focus:outline-none focus:border-neutral-900 transition-colors"
            />

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
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-xs text-neutral-500 text-center mt-4">
            Try: existing@example.com shows error
          </p>
        </div>
      </div>
    </div>
  );
}