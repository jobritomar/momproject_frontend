import { api } from "./api";

export async function listItems() {
  return api.get("/api/items").then(res => res.data);
}

export async function createItem(item) {

  const formData  = new FormData();

  for(const name in item) {
    formData.append(name, item[name]);
  }

  return api.post("/api/items/new", formData).then(res => res.data)
}

export async function deleteItem(id) {
  return api.post(`/api/items/${id}/delete`).then(res => res.data)
}