import { api } from "./api";

export async function newOrder(order) {
  return api.post("/api/orders/new", order);
}
