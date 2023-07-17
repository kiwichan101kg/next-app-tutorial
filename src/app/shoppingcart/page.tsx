"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  count: number;
};
const initialProducts: Product[] = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleIncrement = (id: number) => {
    const nextProduct = products.map((p) => {
      if (p.id === id) {
        return { ...p, count: p.count + 1 };
      } else {
        return p;
      }
    });
    setProducts(nextProduct);
  };
  const handleDecrease = (id: number) => {
    const nextProduct = products
      .filter((p) => p.count > 0)
      .map((p) => {
        if (p.id === id) {
          return { ...p, count: p.count - 1 };
        } else {
          return p;
        }
      });
    setProducts(nextProduct);
  };
  return (
    <>
      {products.map((product) => (
        <div key={product.name}>
          <li>{product.name}</li>
          <div>{product.count}</div>
          <button onClick={() => handleIncrement(product.id)}> + </button>
          <button onClick={() => handleDecrease(product.id)}> - </button>
        </div>
      ))}
    </>
  );
}
