const BASE = import.meta.env.VITE_API_HOST_URL ?? "http://localhost:4000";

export interface ContactPayload {
  name:           string;
  email:          string;
  message:        string;
  recaptchaToken: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${BASE}/api/v1/contact`, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      (data as { message?: string }).message ?? `Request failed (${res.status})`
    );
  }
}
