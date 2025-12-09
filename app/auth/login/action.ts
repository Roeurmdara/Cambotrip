"use server";

import { apiPOST } from "@/lib/api";
import { setAuthCookies } from "@/lib/cookies";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await apiPOST("/auth/login", { email, password });

  if (!res.ok) return { error: "Invalid email or password" };

  const data = await res.json();

  setAuthCookies(data.accessToken, data.refreshToken);

  return { success: true };
}
