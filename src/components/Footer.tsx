import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-black py-6">
            <div className=" px-4">

                <div className="flex flex-wrap justify-around items-center border-b border-gray-300 pb-6">
                    <div className="flex flex-col sm:flex-row items-center gap-14 text-blue-800 font-bold text-md max-w-4xl ">
                        <div className="flex items-center gap-3 hover:underline cursor-pointer">
                            <Image src="/footer/clock.svg" alt='clock' width={40} height={40} />
                            Quick and Easy Store Pickup
                        </div>
                        <div className="flex items-center gap-3 hover:underline cursor-pointer">
                            <Image src="/footer/shipping.svg" alt='clock' width={40} height={40} />
                            Free shipping over $35
                        </div>
                        <div className="flex items-center gap-3 hover:underline cursor-pointer">
                            <Image src="/footer/price.svg" alt='clock' width={40} height={40} />
                            Low Price Guarantee
                        </div>
                        <div className="flex items-center gap-3 hover:underline cursor-pointer">
                            <Image src="/footer/box.svg" alt='clock' width={40} height={40} />
                            Latest and Greatest Tech
                        </div>
                    </div>
                </div>

                <div className='flex gap-8 mx-6 md:mx-20 md:flex-row flex-col'>
                    {/* Links Section */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 text-xs md:w-2/3">
                        <div>
                            <h4 className="font-bold text-gray-700">Customer Support</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Contact Us</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Help Centre</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Returns & Exchanges</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Best Buy Gift Cards</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">About Best Buy Marketplace</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">My Best Buy Account</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Order Status</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Manage Account</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Preference Centre</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Personal Information Request</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">Services</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Geek Squad</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Best Buy Membership</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Monthly Subscription</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Best Buy Financing</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Trade-In Program</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">About Us</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Careers</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Corporate Information</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Newsroom</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Our Commitment to the Environment</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Best Buy US</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">Partner With Us</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Advertise with Best Buy</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Become a Best Buy Affiliate</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">Sell on Best Buy Marketplace</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700">Mobile Apps</h4>
                            <ul className="space-y-2 mt-2">
                                <li><Link href="/" className="hover:text-blue-500">Android App</Link></li>
                                <li><Link href="/" className="hover:text-blue-500">iOS App</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter and Social Links */}
                    <div className="flex flex-col gap-8 py-6 md:w-1/3 text-xs ">
                        <div className="mb-4 md:mb-0">
                            <h4 className="font-bold text-gray-700">Be the first to know</h4>
                            <p className="text-gray-600 mt-4">
                                Sign up to stay in the loop about the hottest deals, coolest new products, and exclusive sales events.
                            </p>
                            <div className="mt-4 flex text-sm">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="border border-gray-300 p-2 focus:outline-none"
                                />
                                <button className="bg-blue-800 text-white px-4 hover:bg-blue-900">Sign Up</button>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <Link href="/facebook" className="text-gray-600 hover:text-blue-500">
                                <Facebook size={20} />
                            </Link>
                            <Link href="/instagram" className="text-gray-600 hover:text-blue-500">
                                <Instagram size={20} />
                            </Link>
                            <Link href="/linkedin" className="text-gray-600 hover:text-blue-500">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="/twitter" className="text-gray-600 hover:text-blue-500">
                                <Twitter size={20} />
                            </Link>
                            <Link href="/youtube" className="text-gray-600 hover:text-blue-500">
                                <Youtube size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 text-xs border-t border-gray-300 pt-6">
                    <p>© Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver, BC V5Y 1L3</p>
                    <p className="mt-2">
                        <Link href="/terms" className="hover:text-blue-500">Terms & Conditions</Link> |
                        <Link href="/privacy" className="hover:text-blue-500"> Privacy Policy</Link> |
                        <Link href="/cookie-policy" className="hover:text-blue-500"> Cookie Policy</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
