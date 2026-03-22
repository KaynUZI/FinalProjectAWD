import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    // THESE ARE YOUR 3 PRODUCTS WITH WORKING IMAGE LINKS
    const products = [
        {
            id: 1,
            name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            description: "Your perfect pack for everyday use and walks in the forest."
        },
        {
            id: 2,
            name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            price: 109.00,
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            description: "Easy upgrade for faster boot up, shutdown, and response."
        },
        {
            id: 3,
            name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
            price: 64.00,
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            description: "USB 3.0 and USB 2.0 compatibility for fast data transfers."
        }
    ];

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('bg-dark', 'text-light');
        } else {
            document.body.classList.remove('bg-dark', 'text-light');
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prevCart, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
    const updateQty = (id, amount) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
        ));
    };
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ 
            cart, products, addToCart, removeFromCart, updateQty, clearCart, darkMode, toggleDarkMode 
        }}>
            {children}
        </CartContext.Provider>
    );
};