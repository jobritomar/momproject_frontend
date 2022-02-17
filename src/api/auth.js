import { api } from "./api";

export function login(credentials) {
  return api.post("/api/login", credentials);
}

export function signup(credentials) {
  return api.post("/api/signup", credentials);
}

export function logout() {
  return api.post("/api/logout");
}

export function isLoggedIn() {
  return api.get("/api/login");
}
