'use client'

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/181/18170/18170212.jpg",
        title: "Samsung 65\" 4K UHD HDR LED Tizen OS Smart TV (UN65DU8000FXZC) - 2024",
        rating: 4.5,
        reviews: 373,
        isTopDeal: true,
        discount: 200,
        price: "799.99",
        extraFee: "18.25",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/145/14597/14597172.jpg",
        title: "Epson EpiqVision Mini EF22 Smart Laser Gaming Projector (V11HB38420)",
        rating: 4.2,
        reviews: 19,
        isTopDeal: true,
        discount: 200,
        price: "1,099.99",
        extraFee: null,
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/156/15674/15674482.jpg",
        title: "Toshiba 55\" 4K UHD HDR LED Fire Smart TV (55C350LC) - 2023 - Only at Best Buy",
        rating: 4.3,
        reviews: 29,
        isTopDeal: true,
        discount: 200,
        price: "449.99",
        extraFee: "18.25",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/178/17856/17856731.jpg",
        title: "Samsung The Frame 65\" HDR QLED Tizen Smart TV (QN65LS03DAFXZC) - 2024 Open Box 10/10 Condition With 1 Year Warranty",
        rating: 5.0,
        reviews: 0,
        isTopDeal: true,
        discount: 900,
        price: "1,598.00",
        extraFee: null,
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/171/17177/17177635.jpg",
        title: "LG 86\" 4K UHD HDR LED webOS Smart TV (86UR7800PUA) - 2023 - Black - Only at Best Buy",
        rating: 4.7,
        reviews: 1047,
        isTopDeal: true,
        discount: 600,
        price: "1,099.99",
        extraFee: "18.25",
    },
];

const WatchPartySale: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 bg-cover bg-center"
            style={{ backgroundImage: "url(/hero/1.png)" }}
        >
            {/* Left Section */}
            <div className="flex flex-col justify-start md:w-1/3 p-4 text-center md:text-left">
                <Image
                    className="mx-auto md:mx-0 pt-4"
                    alt="Watch Party Sale"
                    src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1a7883ba196b55c8/679aad0c284b0a118890b906/ht-20250131-wps-feature-grid-1-logo-en.png"
                    width={250}
                    height={250}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 25vw"
                    priority
                />
                <h1 className="text-xl md:text-3xl font-bold text-white mt-2">
                    Big savings for the big game on TVs, speakers, accessories, and more.
                </h1>
                <button className="w-32 mt-4 md:mt-6 px-4 py-2 bg-white hover:bg-gray-100 text-blue-800 font-semibold rounded">
                    Shop Now
                </button>
            </div>

            {/* Right Section */}
            <div className="md:w-2/3 px-4 md:px-16 mt-6 md:mt-0">
                <div className="relative w-full">
                    {/* Left Scroll Button */}
                    <button
                        className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-white p-2 rounded-full shadow-md hidden md:block"
                        onClick={() => scroll("left")}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Scrollable Products */}
                    <div ref={scrollRef} className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 p-4">
                        {products.map((product, index) => (
                            <div key={index} className="bg-white rounded-md p-4 w-48 md:w-52 border border-gray-200 flex-none">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-32 md:h-40 object-cover rounded-md"
                                />
                                <h3 className="text-xs mt-2">{product.title}</h3>
                                <div className="flex flex-col mt-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                size={16}
                                                className={starIndex < product.rating ? "text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
                                </div>
                                {product.isTopDeal && (
                                    <span className="bg-[#bb0628] text-white text-xs font-bold px-2 py-1 rounded mt-2 inline-block">
                                        Top Deal
                                    </span>
                                )}
                                {product.discount && (
                                    <p className="text-[#bb0628] text-sm font-semibold mt-1">SAVE ${product.discount}</p>
                                )}
                                <p className="text-[#bb0628] text-xl font-bold">${product.price}</p>
                                {product.extraFee && (
                                    <p className="text-gray-500 text-xs">Plus ${product.extraFee} EHF</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Scroll Button */}
                    <button
                        className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 text-gray-400 bg-white p-2 rounded-full shadow-md hidden md:block"
                        onClick={() => scroll("right")}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WatchPartySale;
