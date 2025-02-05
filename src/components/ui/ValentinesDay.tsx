import React from 'react';
import Image from 'next/image';


const ValentinesDay = () => {
    const Categories = [
        {
            id: 1,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltddf15b05548ffdcd/61687ee0e557ba1024b616e0/global-hgg-20211101-gift-icon-50-en.png",
            title: "Gifts Under $50"
        },
        {
            id: 2,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt7e1ecff2d26a8681/61687ecd0d172d03af620ce9/global-hgg-20211101-gift-icon-100-en.png",
            title: "Gifts Under $100"
        },
        {
            "id": 3,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blte1f880a9e0e3295d/61687ed6e557ba1024b616de/global-hgg-20211101-gift-icon-250-en.png",
            title: "Gifts Under $250"
        },
        {
            "id": 4,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt008600af89a68f4d/61687ef39b2a360198311afe/global-hgg-20211101-gift-icon-400-en.png",
            title: "Gifts Under $400"
        },
        {
            "id": 5,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltcc8030a9f8627842/61687eea9b2a360198311afc/global-hgg-20211101-icon-giftcards-en.png",
            title: "Gift Cards"
        },
        {
            "id": 6,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4941eb17f4edbdf9/6789aa56dfdbb5edd804fd82/global-2025-valentines-shopby-icon-en.png",
            title: "Valentine's DayGifts"
        },
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-4 md:px-8 py-8">
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Get inspired for Valentine's Day</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
                    {Categories.map((Category) => (
                        <div key={Category.id} className="rounded-lg text-blue-700 hover:underline cursor-pointer">
                            <Image
                                src={Category.image}
                                alt={Category.title}
                                width={300}
                                height={300}
                                className="w-full h-24 object-contain mb-4"
                            />
                            <h3 className="text-sm text-center text-blue-700 mb-2">{Category.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValentinesDay;
