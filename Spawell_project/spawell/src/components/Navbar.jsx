import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header className="bg-[#5e6551] fixed w-full z-20 top-2 start-0 border-b border-white/10">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://html.awaikenthemes.com/spawell/images/logo.svg"
                            // className="h-8 filter brightness-0 invert"
                            alt="Spawell Logo"
                        />
                    </Link>

                    {/* Right Side: Appointment Button */}
                    <div className="flex md:order-2 items-center">
                        <button className="hidden md:flex items-center bg-[#A07B5A] text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#8e6a4d] transition-all text-sm lg:text-base">
                            Book Appointment
                            <svg className="w-4 h-4 ms-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>

                        <button
                            data-collapse-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-white/10 ml-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden w-full md:flex md:w-auto md:order-1" id="navbar-default">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 text-white">

                            {/* HOME Dropdown */}
                            <li className="relative group">
                                <button className="flex items-center justify-between w-full py-2 px-3 hover:text-[#A07B5A] md:p-0 transition-colors">
                                    Home
                                    <svg className="w-3 h-3 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-0 w-48 bg-[#A07B5A] rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <ul className="py-2 text-sm text-white font-medium">
                                        <li><Link to="/" className="block px-4 py-2 hover:bg-black/10 transition-colors">Home - Main</Link></li>
                                        <li><Link to="/home-image" className="block px-4 py-2 hover:bg-black/10 transition-colors">Home - Image</Link></li>
                                        <li><Link to="/home-video" className="block px-4 py-2 hover:bg-black/10 transition-colors">Home - Video</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li><NavLink to="/about" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0">About Us</NavLink></li>
                            <li><NavLink to="/services" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0">Services</NavLink></li>
                            <li><NavLink to="/blog" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0">Blog</NavLink></li>

                            {/* PAGES Dropdown (New Set) */}
                            <li className="relative group">
                                <button className="flex items-center justify-between w-full py-2 px-3 hover:text-[#A07B5A] md:p-0 transition-colors">
                                    Pages
                                    <svg className="w-3 h-3 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {/* Pages ડ્રોપડાઉન લિસ્ટ */}
                                <div className="absolute left-0 mt-0 w-48 bg-[#A07B5A] rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <ul className="py-2 text-sm text-white font-medium">
                                        <li><Link to="/Services" className="block px-4 py-2 hover:bg-black/10 transition-colors">Service Details</Link></li>
                                        <li><Link to="/Blog" className="block px-4 py-2 hover:bg-black/10 transition-colors">Blog Details</Link></li>
                                        <li><Link to="/CaseStudy" className="block px-4 py-2 hover:bg-black/10 transition-colors">Case Study</Link></li>
                                        <li><Link to="/CaseStudy-details" className="block px-4 py-2 hover:bg-black/10 transition-colors">Case Study Details</Link></li>
                                        <li><Link to="/team" className="block px-4 py-2 hover:bg-black/10 transition-colors">Our Team</Link></li>
                                        <li><Link to="/team-details" className="block px-4 py-2 hover:bg-black/10 transition-colors">Team Details</Link></li>
                                        <li><Link to="/pricing" className="block px-4 py-2 hover:bg-black/10 transition-colors">Pricing</Link></li>
                                        <li><Link to="/testimonial" className="block px-4 py-2 hover:bg-black/10 transition-colors">Testimonials</Link></li>
                                        <li><Link to="/image-gallery" className="block px-4 py-2 hover:bg-black/10 transition-colors">Image Gallery</Link></li>
                                        <li><Link to="/video-gallery" className="block px-4 py-2 hover:bg-black/10 transition-colors">Video Gallery</Link></li>
                                        <li><Link to="/faqs" className="block px-4 py-2 hover:bg-black/10 transition-colors">Faqs</Link></li>
                                        <li><Link to="/error" className="block px-4 py-2 hover:bg-black/10 transition-colors">404</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li><NavLink to="/contact" className="block py-2 px-3 hover:text-[#A07B5A] md:p-0">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="pt-24 min-h-screen">
                <Outlet />
            </main>
        </>
    );
};

export default Navbar;