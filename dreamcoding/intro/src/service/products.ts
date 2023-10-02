import path from 'path';
import { promises } from 'fs';

export async function getProducts(): Promise<Product[]> {
  const dir = path.join(process.cwd(), 'data', 'products.json');
  const data = await promises.readFile(dir, 'utf-8');

  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();

  return products.find((product) => product.id === id);
}
