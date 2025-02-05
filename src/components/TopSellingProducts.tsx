'use client'

import React, { useRef } from "react";
import { Card, CardContent as CardBody } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        id: 1,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/186/18658/18658263.jpg",
        title: "AMD Ryzen 7 9800X3D 8-Core 5.2GHz AM5 Processor",
        price: "$689.99",
        reviews: 64,
        rating: 5,
    },
    {
        id: 2,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/174/17402/17402244.jpg",
        title: "Apple Pencil (USB-C) (3rd Generation) for iPad - White",
        price: "$89.00",
        reviews: 1418,
        rating: 5,
        badge: "Top Deal",
        discount: "SAVE $20",
    },
    {
        id: 3,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/165/16566/16566920.jpg",
        title: 'Apple iPad 10.9" 64GB with Wi-Fi 6 (10th Generation) - Blue',
        price: "$449.99",
        reviews: 37,
        rating: 4.5,
        badge: "Top Deal",
        discount: "SAVE $50",
    },
    {
        id: 4,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/174/17477/17477496.jpg",
        title: "PlayStation 5 Slim Console",
        price: "$649.99",
        reviews: 39,
        rating: 4,
        extraInfo: "Plus $3.75 EHF",
    },
    {
        id: 5,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/174/17477/17477496.jpg",
        title: "PlayStation 5 Slim Digital Edition Console",
        price: "$579.99",
        reviews: 32,
        rating: 4,
        extraInfo: "Plus $3.75 EHF",
    },
    {
        id: 6,
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/153/15374/15374400.jpg",
        title: "Fujifilm Instax Mini 5-Pack Instant Film - 50 Sheets",
        price: "$649.99",
        reviews: 39,
        rating: 4,
    },
];

const TopSellingProducts: React.FC = () => {
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
                Top Selling and Popular Products
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
                            <CardBody className="p-4 flex flex-col my-3">
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
                            </CardBody>
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

export default TopSellingProducts;

