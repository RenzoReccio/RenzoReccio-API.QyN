import { Product } from "../model/interface/product.interface";

export interface ProductRepository {
  findAll(relations?: string[]): Promise<Product[]>;
  findAllCatalog(relations?: string[]): Promise<Product[]>;
  findOne(id: number, relations?: string[]): Promise<Product>;
  insert(product: Product): Promise<Product>;
  update(product: Product): Promise<Product>;
  getOneByCode(code: string): Promise<Product>;
  getByIds(ids: number[]): Promise<Product[]>;
  updateMany(product: Product[]): Promise<Product[]>;
}