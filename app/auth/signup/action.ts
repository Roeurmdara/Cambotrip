"use server";

import { apiPOST } from "@/lib/api";
import { setAuthCookies } from "@/lib/cookies";

export async function signupAction(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await apiPOST("/auth/signup", {
    name,
    email,
    password,
  });

  if (!res.ok) return { error: "Signup failed" };

  const data = await res.json();

  setAuthCookies(data.accessToken, data.refreshToken);

  return { success: true };
}
