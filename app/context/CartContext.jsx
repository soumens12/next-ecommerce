"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [carts, setCarts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCarts = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data); // API returns an array of products
            // console.log(data);

        } catch (error) {
            console.error("Error fetching carts:", error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchCarts();
    }, []);

    const addToCart = (product) => {
        setCarts((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) => item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item)
            }
            // return [...prev, { ...product, quantity: 1 }];
            else {
                return [...prev, { ...product, quantity: 1 }];
            }


        });
    }

    const cartCount = carts.reduce((total, item) => total + (item.quantity || 0), 0);

    const removeFromCart = (id) => {
        setCarts((prev) => prev.filter((item) => item.id !== id));
    };

    // Increase quantity
    const increaseQty = (id) => {
        setCarts((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease quantity
    const decreaseQty = (id) => {
        setCarts((prev) =>
            prev.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    return (
        <CartContext.Provider value={{ carts, products, loading, addToCart, removeFromCart, cartCount, increaseQty, decreaseQty }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}