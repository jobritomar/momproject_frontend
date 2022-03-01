import { api } from "./api";

export async function newOrder(order) {
  return api.post("/api/orders/new", order);
}

export async function listOrders() {
  return api.get("/api/orders").then(res => res.data)
}

export async function listOrder(id) {
  return api.get("/api/orders/" + id).then(res => res.data)
}

export async function editOrder(id, order) {
  return api.post("/api/orders/" + id + "/edit", order).then(res => res.data)
}

export async function deleteOrder(id) {
  return api.post("/api/orders/" + id + "/delete").then(res => res.data)
}

export async function listMyOrders() {
  return api.get("/api/orders/mine").then(res => res.data)
}