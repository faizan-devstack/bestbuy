import React from 'react';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import Image from 'next/image';


const GreatestTech = () => {
    const offers = [
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8c6778b60dc0c821/678fed28ee8f385b0faa3df5/vg-20250124-offer-nsw2-4col-m.jpg",
            title: "Get ready for Nintendo Switch 2.",
            description: "Sign up to get more information about when you can pre-order the new console.",
            link: "/",
            linkText: "Sign up"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte4671f1318e97ef2/6797c58c78300700b4cfae52/wi-20250131-offer-paradigm-hp-lg-kv-m-en.jpg",
            title: "Get up to a $200 in-cart discount when you pre-order select unlocked Galaxy S25 series smartphones",
            description: "Plus, trade in an eligible phone for up to $1,475 in combined discount and bonus gift cards",
            link: "/",
            linkText: "Pre-order now"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd9d81ab43b0e3f86/6797c58d4d5b24f9d576f3af/wi-20250131-offer-pneplus13-family-hp-lg-m.jpg",
            title: "Get a $150 gift card when you purchase an unlocked OnePlus 13 or OnePlus 13R.*",
            link: "/",
            linkText: "Shop now"
        },
        {
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4ef3041d33528b3a/6785a9a2532fd677565a2d38/computing-20250117-offer-lg-ms365-4col-m.jpg",
            title: "Unleash your creativity, with AI in Microsoft 365.",
            link: "/",
            linkText: "Learn more"
        }
    ];

    return (
        <section className="py-4 mb-10 text-white mx-auto max-w-7xl"
            style={{
                backgroundImage: 'url(/greatestTech/1.png)',
                backgroundSize: '120% 100%', // Stretches the image to fully cover
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="p-4">
                <h2 className="text-4xl font-bold text-center mb-3">Latest and Greatest Tech</h2>
                <h3 className="text-sm text-center mb-3">The newest releases, all in one place.</h3>
                <h3 className="text-sm font-semibold text-center mb-14 flex items-center justify-center hover:underline cursor-pointer">
                    Explore all new tech <ChevronRight size={16} className="ml-1" />
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {offers.map((offer, index) => (
                        <div key={index} className="rounded-lg p-4 hover:underline cursor-pointer">
                            <Image
                                src={offer.image}
                                alt={offer.title}
                                width={400}
                                height={400}
                                className="w-full h-48 object-contain mb-4"
                            />
                            <h3 className="text-md font-bold mb-2">{offer.title}</h3>
                            {offer.description && (
                                <p className="text-md mb-4">{offer.description}</p>
                            )}
                            <Link
                                href={offer.link}
                                className="font-semibold flex items-center gap-1"
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

export default GreatestTech;
