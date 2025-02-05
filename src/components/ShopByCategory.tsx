import React from 'react';
import Image from 'next/image';


const ShopByCategory = () => {
    const Categories = [
        {
            id: 1,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltecfad2235b10bd33/66846758534a9db3bcadde03/ht-20240705-homepage-sbc-icon.jpg",
            title: "TVs, Home Theatre, and Accessories"
        },
        {
            id: 2,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt24a700f32e929659/63be07ba013dbb4c68f9b3df/computing-evergreen-category-icon-computers-and-tablets.jpg",
            title: "Computers and Tablets"
        },
        {
            "id": 3,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt73c9d78a1a777d89/65d7c2a75d2ab283df73e4ef/wi-20240223-icon-cellphones-and-accessories.jpg",
            title: "Cell Phones and Accessories"
        },
        {
            "id": 4,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9450d10d80be158b/6192ea614eed0e4a24dca596/homepage-shopbycategory-pa-on-sale.jpg",
            title: "Headphones and Portable Speakers"
        },
        {
            "id": 5,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd9386dee2c0bb137/631a7b580a5bd94db562fe97/computing-evergreen-icon-computer-accessories.jpg",
            title: "Computer Accessories"
        },
        {
            "id": 6,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt77b27294b5c07f31/6317d3609dbe2b58ee19e863/computing-evergreen-category-icon-pc-gaming.jpg",
            title: "PC Gaming"
        },
        {
            "id": 7,
            image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/174/17477/17477496.jpg",
            title: "Video Games, Consoles, and Accessories"
        },
        {
            "id": 8,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt051d0a8b7b479bb7/6644e3874b531eb1dfc30c36/17234373.jpg",
            title: "Small Kitchen Appliances"
        },
        {
            "id": 9,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltebba6ba1bd154354/5ee2c83e0f079e4334fd6c74/majorapps-icon.jpg",
            title: "Major Appliances"
        },
        {
            "id": 10,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltea880f7135258af9/65e11b0972b38733f422c650/sh-20240112-icon-hp-smart-home-white.jpg",
            title: "Smart Home"
        },
        {
            "id": 11,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt2705e457feb84d61/62059060214fe9266428d3e4/vacuums-sbc-icon-12370687.jpeg",
            title: "Vacuums"
        },
        {
            "id": 12,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltf0ec91a9fef6f593/65b2e2450856167dfb5e01a5/15264633-dyson_icon.jpg",
            title: "Cooling, Heating, and Air Quality"
        },
        {
            "id": 13,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltff769e2ada93c2db/5fa9e4b44e40cf53001f5252/di-evergreen-category-icon-cameras-drones.jpg",
            title: "Cameras, Camcorders, and Drones"
        },
        {
            "id": 14,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt570fba736c35c750/65e104150f1d35993cca56e1/15929829_1.jpg",
            title: "Wearable Technology"
        },
        {
            "id": 15,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/bltd2f3986d3c86a54d/5ea2174d6a64bf2a22a1187a/13398953.jpg",
            title: "Health and Fitness"
        },
        {
            "id": 16,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt604291a0cedab958/63c5e27b5156964aea434a97/personal-care-sbc-icon-16242968.jpg",
            title: "Personal Care"
        },
        {
            "id": 17,
            image: "https://multimedia.bbycastatic.ca/multimedia/products/250x250/143/14361/14361142.jpg",
            title: "Electric Transportation"
        },
        {
            "id": 18,
            image: "https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4ac346d12d1470b1/63190b29c9b2cd2d9d2a3912/babyevent-skus-sbc-icon.jpg",
            title: "Baby and Maternity"
        }
    ];

    return (
        <section className="py-10">
            <div className="container mx-auto px-4 md:px-8 py-8">
                <h2 className="text-2xl font-bold text-center mb-8 text-black">Shop By Category</h2>
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

export default ShopByCategory;
