"use client";

import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
    const { carts, removeFromCart, cartCount } = useCart();

    if (!carts.length) {
        return <p className="text-center mt-10">Your cart is empty.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart ({cartCount} items)</h2>

            <div className="space-y-4">
                {carts.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between border p-4 rounded"
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-16 h-16 object-contain"
                            />
                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: ${item.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6 text-right">
                <p className="font-bold text-lg">
                    Total Items: {cartCount}
                </p>
                <p className="font-bold text-lg">
                    Total Price: $
                    {carts.reduce(
                        (total, item) => total + item.price * (item.quantity || 1),
                        0
                    )}
                </p>
            </div>
        </div>
    );
}
