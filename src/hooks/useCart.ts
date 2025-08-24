import { useState, useEffect } from 'react';
import { CartItem, Pizza } from '@/types';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addItem = (pizza: Pizza, size: 'small' | 'medium' | 'large', quantity: number = 1) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.pizza.id === pizza.id && item.size === size
      );

      if (existingItem) {
        return prevItems.map(item =>
          item.pizza.id === pizza.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { pizza, size, quantity }];
      }
    });
  };

  const removeItem = (pizzaId: string, size: 'small' | 'medium' | 'large') => {
    setItems(prevItems => 
      prevItems.filter(item => !(item.pizza.id === pizzaId && item.size === size))
    );
  };

  const updateQuantity = (pizzaId: string, size: 'small' | 'medium' | 'large', quantity: number) => {
    if (quantity <= 0) {
      removeItem(pizzaId, size);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.pizza.id === pizzaId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      return total + (item.pizza.sizes[item.size].price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems
  };
};