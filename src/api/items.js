import { api } from "./api";

export async function listItems() {
  return api.get("/api/items").then(res => res.data);
}

export async function createItem(item) {
  return api.post("/api/items/new", item).then(res => res.data)
}

export async function deleteItem(id) {
  return api.post(`/api/items/${id}/delete`).then(res => res.data)
}