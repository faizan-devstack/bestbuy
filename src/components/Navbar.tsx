'use client'

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, User, Store, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const topNavLinks = [
        { name: "Order Status", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Best Buy Business", href: "/" },
        { name: "Français", href: "/" },
    ];

    const bottomNavLinks = [
        { name: "Shop", href: "/" },
        { name: "Watch Party Sale", href: "/" },
        { name: "Deals", href: "/" },
        { name: "Outlet", href: "/" },
        { name: "Services", href: "/" },
    ];

    return (
        <nav className="bg-blue-700 text-white">
            <div className="hidden md:flex justify-end space-x-3 text-sm p-3">
                {topNavLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="hover:underline">
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="container mx-auto flex justify-between items-center p-3">
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu size={28} />
                </button>

                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                    </Link>
                </div>

                <div className="hidden md:flex mx-4 flex-grow justify-start relative max-w-2xl">
                    <input
                        type="text"
                        placeholder="Search Best Buy"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 pl-4 text-black rounded"
                    />
                    <Search className="absolute right-5 top-[10px] text-gray-500" size={20} />
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/stores" className="flex items-center space-x-1">
                        <Store size={20} />
                        <span className="hidden md:inline">Stores</span>
                    </Link>
                    <Link href="/account" className="flex items-center space-x-1">
                        <User size={20} />
                        <span className="hidden md:inline">My Account</span>
                    </Link>
                    <Link href="/cart" className="flex items-center space-x-1">
                        <ShoppingCart size={20} />
                        <span className="hidden md:inline">Cart</span>
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-blue-800 text-white space-y-2 p-3">
                    {bottomNavLinks.map((item, index) => (
                        <Link key={index} href={item.href} className="block py-2 hover:bg-blue-900 rounded px-4">
                            {item.name}
                        </Link>
                    ))}
                    
                    <div className="relative mt-2">
                        <input
                            type="text"
                            placeholder="Search Best Buy"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full p-2 pl-4 text-black rounded"
                        />
                        <Search className="absolute right-5 top-[10px] text-gray-500" size={20} />
                    </div>
                </div>
            )}

            <div className="hidden md:block bg-blue-800">
                <div className="container mx-auto flex justify-start space-x-6 py-2">
                    {bottomNavLinks.map((item, index) => (
                        <Link key={index} href={item.href} className="flex items-center space-x-1 font-semibold">
                            <span>{item.name}</span>
                            <ChevronDown size={16} />
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
