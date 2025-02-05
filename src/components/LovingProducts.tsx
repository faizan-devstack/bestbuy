'use client'

import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        "id": 1,
        "image": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/165/16568/16568025.jpeg",
        "title": "MotionGrey Standing Desk Height Adjustable Electric Motor Sit-to-Stand",
        "price": "$109.99",
        "reviews": 31,
        "rating": 4
    },
    {
        "id": 2,
        "image": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/149/14994/14994374.jpeg",
        "title": "Booster 6' x 4' ft Rebound Net Soccer Goal with 5 Angle Adjustable",
        "price": "$69.99",
        "reviews": 0,
        "rating": 0
    },
    {
        "id": 3,
        "image": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/177/17759/17759925.jpeg",
        "title": "MotionGrey - Height Adjustable L-Shaped Standing Desk",
        "price": "$249.99",
        "reviews": 28,
        "rating": 4
    },
    {
        "id": 4,
        "image": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/181/18197/18197318.jpeg",
        "title": "MotionGrey MC2 Ergonomic Breathable Mesh High Office Chair",
        "price": "$89.99",
        "reviews": 35,
        "rating": 4
    },
    {
        "id": 5,
        "image": "https://multimedia.bbycastatic.ca/multimedia/products/250x250/175/17543/17543432.jpeg",
        "title": "MotionGrey MC1 Ergonomic Breathable Mesh High Office Chair",
        "price": "$49.99",
        "reviews": 24,
        "rating": 4
    }
]

const LovingProducts: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust the scroll distance
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="max-w-5xl mx-auto pb-16 px-4 md:px-0">
            <div className="text-xl md:text-2xl font-bold text-center mb-8 text-black">
                Products we think you'll love
            </div>

            <div className="relative w-full">
                {/* Left Scroll Button - Hidden on small screens */}
                <button
                    className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-white p-2 rounded-full shadow-md hidden md:block"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft size={24} />
                </button>

                {/* Scrollable Products */}
                <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 p-4">
                    {products.map((product) => (
                        <Card key={product.id} className="w-48 md:w-64 flex-shrink-0 border border-gray-300 rounded-lg shadow-sm cursor-pointer">
                            <CardContent className="p-4 flex flex-col my-3">
                                <img src={product.image} alt={product.title} className="h-32 object-contain" />
                                <h3 className="text-sm font-medium mt-6 hover:underline">{product.title}</h3>
                                <div className="mt-3">
                                    <div className="flex">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <Star key={index} size={14} className={index < product.rating ? "text-yellow-500" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 ml-1">({product.reviews} Reviews)</span>
                                </div>
                                <p className="text-lg font-bold mt-2">{product.price}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Right Scroll Button - Hidden on small screens */}
                <button
                    className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-white p-2 rounded-full shadow-md hidden md:block"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};

export default LovingProducts;
