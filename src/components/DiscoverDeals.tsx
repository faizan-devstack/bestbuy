'use client'

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/175/17543/17543432.jpeg",
        title: "MotionGrey MC1 Ergonomic Breathable Mesh High Office Chair - Comfortable Computer Task Desk Chairs for Home Gaming and Executive Commercial Office - Black",
        rating: 4.5,
        reviews: 34,
        isTopDeal: true,
        price: "49.99",
        extraFee: "",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/186/18625/18625771.jpeg",
        title: "Bulova Ladies Crystal Quartz Box-Set 31.5mm Rose Gold-Tone Stainless Steel Case and Bracelet with Rose Gold-Tone Dial with corresponding Heart Pendant Necklace (98X136)",
        rating: 0,
        reviews: 0,
        isTopDeal: true,
        discount: 365,
        price: "229.99",
        extraFee: "",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/179/17944/17944095.jpeg",
        title: "Costway Full Body Zero Gravity Massage Chair (JL10002WL) Recliner w/ SL Track Heat",
        rating: 0,
        reviews: 0,
        isTopDeal: true,
        discount: 3200,
        price: "1799.99",
        extraFee: "",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/185/18594/18594741.jpeg",
        title: "Open Box - Apple iPhone 16 Pro Max 256GB - Desert Titanium - Unlocked",
        rating: 0,
        reviews: 0,
        isTopDeal: true,
        discount: 150,
        price: "1599.99",
        extraFee: "",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/178/17853/17853456.jpeg",
        title: "Lenovo IdeaPad Pro 5i Laptop, 16\" Glass, Intel Core Ultra 7 155H, 16GB, NVIDIA RTX 3050 GPU 6GB GDDR6, 1TB SSD, For Gaming",
        rating: 4.7,
        reviews: 35,
        isTopDeal: true,
        discount: 816,
        price: "1199.00",
        extraFee: "",
    },
    {
        image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/189/18925/18925110.jpeg",
        title: "Open Box - Apple MacBook Air 13.6\" w/ Touch ID (2022) - Midnight (Apple M2 / 16GB RAM / 256GB SSD) - English",
        rating: 0,
        reviews: 0,
        isTopDeal: true,
        discount: 330,
        price: "969.99",
        extraFee: "",
    },
];

const DiscoverDeals: React.FC = () => {
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
            className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 mt-10 mb-20 bg-cover bg-center"
            style={{ backgroundImage: "url(/discoverDeals/1.png)" }}
        >
            {/* Left Section */}
            <div className="flex flex-col justify-start md:w-1/3 p-4 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold text-white">
                    Discover more deals across an incredible selection
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

export default DiscoverDeals;
