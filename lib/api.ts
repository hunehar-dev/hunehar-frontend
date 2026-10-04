/** Base URL of the Hunehar backend. Override per environment if needed. */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://hunehar-backend-production.up.railway.app";

/** Builds an absolute backend URL from an `/api/v1/...` path. */
export const apiUrl = (path: string) =>
  `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
