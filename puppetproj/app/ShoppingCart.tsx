"use client";
import { useState, useMemo } from "react";
import type { Product } from "./product-data";

function isDefined<T>(x: T | undefined | null): x is T {
  return x != null;
}
export default function ShoppingCart( { products }: {products: Product[]}) {
  const [cartIds, setCartIds] = useState([]);
  const cartProducts = useMemo(() => {
    const safeProducts = products ?? [];
    return cartIds
      .map(id => safeProducts.find(p => p.id === id))
      .filter(isDefined);
  }, [cartIds, products])
  return (
    <>
      
    </>
  )
}
