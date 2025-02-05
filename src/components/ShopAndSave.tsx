import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import Image from 'next/image';


const ShopAndSave = () => {
    const offers = [
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blta5aa86ea0dfa5957/672522dbd522e81383f5f958/global-evergreen-offer-refurbished-4col-m-en.png",
            title: "Increase your savings with refurbished tech",
            description: "Score a deal on products that have been restored to 100% functionality",
            link: "/",
            linkText: "Shop now"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltfcd01c8cae7d2946/66f3276f1c93ab3ce0d545b4/global-evergreen-offer-ybbst-2col-m-en.jpg",
            title: "Yes, Best Buy sells that.",
            description: "Explore a selection of everyday essentials that might surprise you",
            link: "/",
            linkText: "Shop now"
        },
    ];

    return (
        <section className="py-10 text-black md:max-w-7xl md:mx-auto mx-8">
            <div className="">
                <h2 className="text-2xl font-bold text-center mb-8">More ways to shop and save</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {offers.map((offer, index) => (
                        <div key={index} className="rounded-lg  hover:underline cursor-pointer">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                width={500}
                                height={500}
                                className="w-full h-40 object-cover mb-4"
                            />
                            <h3 className="text-md font-bold mb-2">{offer.title}</h3>
                            {offer.description && (
                                <p className="text-md text-gray-600 mb-4">{offer.description}</p>
                            )}
                            <Link
                                href={offer.link}
                                className="text-blue-500 font-semibold flex items-center gap-1"
                            >
                                {offer.linkText} <ChevronRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShopAndSave;
