// src/components/Hero.jsx
import React from 'react';
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="py-24 px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Control Your Mac <br /> with Hand Gestures
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
                Experience a new way of interaction. No mouse, no trackpad. Just you and your hands.
            </p>
            <div className="flex gap-4 mt-4">
                <Button size="lg">Download Now</Button>
                <Button variant="outline" size="lg">Learn More</Button>
            </div>
        </section>
    );
}