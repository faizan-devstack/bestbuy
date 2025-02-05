import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 mx-auto justify-center items-center py-10 px-4 max-w-6xl md:my-16">

            <div
                className="relative bg-cover bg-center p-4 rounded text-center text-white w-full lg:w-1/2"
                style={{ backgroundImage: 'url(/hero/1.png)' }}
            >
                <div className="relative h-64 md:h-72">
                    <Image
                        src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4fe84dc6fdcd7369/679ab1cf3b4101344c032b25/ht-20250131-tv-feature-grid1-fg-xs.png?quality=80&auto=webp"
                        alt="TV Feature"
                        width={300}
                        height={300}
                        sizes="(max-width: 640px) 50px, (max-width: 1024px) 100px, 150px"
                        className="absolute hidden sm:hidden md:hidden lg:block right-24"
                        priority
                    />
                    <Image
                        src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4fe84dc6fdcd7369/679ab1cf3b4101344c032b25/ht-20250131-tv-feature-grid1-fg-xs.png?quality=80&auto=webp"
                        alt="TV Feature"
                        width={300}
                        height={300}
                        sizes="(max-width: 640px) 50px, (max-width: 1024px) 100px, 150px"
                        className="absolute hidden sm:hidden md:block lg:hidden right-64"
                        priority
                    />
                    <Image
                        src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt4fe84dc6fdcd7369/679ab1cf3b4101344c032b25/ht-20250131-tv-feature-grid1-fg-xs.png?quality=80&auto=webp"
                        alt="TV Feature"
                        width={300}
                        height={300}
                        sizes="(max-width: 640px) 50px, (max-width: 1024px) 100px, 150px"
                        className="absolute sm:block md:hidden lg:hidden right-2"
                        priority
                    />
                </div>
                <div>
                    <Image
                        className="mx-auto"
                        alt="Watch Party Sale"
                        src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt1a7883ba196b55c8/679aad0c284b0a118890b906/ht-20250131-wps-feature-grid-1-logo-en.png"
                        width={400}
                        height={400}
                        sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 25vw"
                        priority
                    />
                    <p className="mt-4 text-xl md:text-2xl font-bold">
                        Save up to $700 on select big screen TVs for the big game.
                    </p>
                    <p className="mt-2 text-base md:text-lg">
                        Plus, find great deals on speakers, accessories, and more.
                    </p>
                    <button className="mt-6 px-4 py-2 bg-white hover:bg-gray-100 text-blue-800 font-semibold rounded">
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-1/2">
                <div
                    className="relative bg-cover bg-center p-6  rounded shadow-lg text-white"
                    style={{ backgroundImage: 'url(/hero/2.png)' }}
                >
                    <h1 className="text-3xl md:text-4xl font-bold">
                        <span className="text-yellow-400">Valentine's</span> Day
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-semibold w-full md:w-60">
                        Get the perfect thing for your everything.
                    </p>
                    <button className="mt-6 px-4 py-2 bg-white hover:bg-gray-100 font-semibold text-blue-800 rounded">
                        Shop Now
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative p-4 rounded shadow-lg text-white bg-[#011f72] w-full md:w-1/2">
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt9136b70be4a1ffec/679030836f0a083d302675cf/computing-250122-feature-fg-ipad-carousel-xs.png?quality=80&auto=webp"
                                alt="iPad Deals"
                                width={250}
                                height={150}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
                                priority
                            />
                            <p className="mt-4 text-lg font-semibold w-full md:w-60 text-center">
                                Save up to $600 on select iPad models and more.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-white hover:bg-gray-100 font-semibold text-blue-800 rounded">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div
                        className="relative bg-cover bg-center p-4 rounded shadow-lg text-white w-full md:w-1/2"
                        style={{ backgroundImage: 'url(/hero/3.png)' }}
                    >
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src="https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt8b73b991de29ea7e/65dfc2be7c8526594c234ee1/global-20240226-top-deals-grid-fg-xs-en.png?quality=80&auto=webp"
                                alt="Top Deals"
                                width={250}
                                height={150}
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
                                priority
                            />
                            <p className="mt-7 text-lg font-semibold w-full md:w-60 text-center">
                                Find the hottest offers of the week, all in one place.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-white hover:bg-gray-100 font-semibold text-blue-800 rounded">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
