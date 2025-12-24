// src/components/Navbar.jsx
import React from 'react';

export function Navbar() {
    return (
        <nav className="border-b py-4 px-8 flex justify-between items-center sticky top-0 bg-background/95 backdrop-blur z-50">
            <h1 className="text-xl font-bold">GestureHCI</h1>
            <div className="space-x-4">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
        </nav>
    );
}