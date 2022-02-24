import { api } from "./api";

export async function listItems() {
  return api.get("/api/items").then(res => res.data);
}
