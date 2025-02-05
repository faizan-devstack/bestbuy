import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import Image from 'next/image';


const HottestOffers = () => {
    const offers = [
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltb7b60eb7ab1c9925/679a766a4d95174d51d72573/wi-evergreen-offer-s25-ultra-gc-4-col-m-en.jpg",
            title: "Get up to a $200 gift card when you activate a Samsung Galaxy S25 series with TELUS or Koodo.",
            description: "Plus, get more exclusive deals in-store.",
            link: "/",
            linkText: "Explore the deals"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5f95c7c24a5423a0/67991cfc7bb322029bf6f1c4/pa-20250131-offer-pa-on-sale-4col-m.jpg",
            title: "Save up to 33% on select headphones and portable Bluetooth speakers.",
            link: "/",
            linkText: "Shop now"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltc1b6ff8171841ac4/679a7fcb3b41010e080327e2/ma-20250131-homepage-ob-4col-m.png",
            title: "Save up to 20% on select major appliances.",
            link: "/",
            linkText: "Shop now"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt78283f7b618e3cbd/679aa83c783007cea5cfce5a/global-20241214-offer-gstpromo-4col-m-en.png",
            title: "Shop smart, save on tax.",
            description: "Save the GST/HST on select tech and household items.",
            link: "/",
            linkText: "Shop now"
        }
    ];

    return (
        <section className="py-10 text-black">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Our hottest offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer, index) => (
                        <div key={index} className="rounded-lg p-4 hover:underline cursor-pointer">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                width={300}
                                height={300}
                                className="w-full h-40 object-contain mb-4"
                            />
                            <h3 className="text-md font-bold mb-2">{offer.title}</h3>
                            {offer.description && (
                                <p className="text-sm text-gray-600 mb-4">{offer.description}</p>
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

export default HottestOffers;
