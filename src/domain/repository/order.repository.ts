import { Order } from "../model/interface/order.interface";

export interface OrderRepository {
  insert(order: Order): Promise<Order>;
  update(order: Order): Promise<Order>;
  findAll(relations?: string[]): Promise<Order[]>;
  findAllOrderDelivered(relations?: string[]): Promise<Order[]>;
  findOrdersReadyToAssign(relations?: string[]): Promise<Order[]>;
  findOne(id: number, relations?: string[]): Promise<Order>;
  findByUserId(userId: number, relations?: string[]): Promise<Order[]>;
}