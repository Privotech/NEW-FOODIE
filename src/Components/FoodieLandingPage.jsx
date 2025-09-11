import React, { useState } from "react";
import download from "../../public/images/download.jpeg"


export default function FoodieLanding() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-sans bg-white text-gray-800">
            {/* Navbar */}
            <nav className="bg-blue-900 text-white fixed w-full top-0 z-50 shadow-md">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-yellow-400">Foodie</div>

                    {/* Links */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <a href="#home" className="hover:text-yellow-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className="hover:text-yellow-400">
                                Shop
                            </a>
                        </li>
                    </ul>

                    {/* Toggle Button (Mobile) */}
                    <button
                        className="md:hidden text-yellow-400 text-3xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden bg-blue-800 text-white flex flex-col space-y-4 py-4 px-6">
                        <li>
                            <a href="#home" className="hover:text-yellow-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#shop" className="hover:text-yellow-400">
                                Shop
                            </a>
                        </li>
                    </ul>
                )}
            </nav>

            {/* Hero Section */}
            <section
                id="home"
                className="pt-24 text-center bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Delicious Food Delivered Fast 🍔
                </h1>
                <p className="max-w-2xl mx-auto text-lg mb-6">
                    Order your favorite meals and snacks with a single click! Fresh, tasty,
                    and delivered to your door.
                </p>
                <a
                    href="#shop"
                    className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-yellow-300"
                >
                    Shop Now
                </a>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
                {/* Ordering Card */}
                <img src={download} alt="" width={400} />

                {/* Reasons */}
                <div>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Fresh and organic
                            ingredients every time
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Lightning-fast
                            delivery service
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Thousands of happy
                            customers
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> 24/7 customer
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Easy-to-use mobile
                            app
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Exclusive deals
                            and discounts
                        </li>
                        <li className="flex items-start">
                            <span className="text-yellow-400 mr-3">✔</span> Eco-friendly
                            packaging
                        </li>
                    </ul>
                </div>
            </section>

            {/* About Us */}
            <section
                id="about"
                className="py-16 bg-blue-50 text-center px-6 max-w-5xl mx-auto"
            >
                <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    At Foodie, we believe that food is more than just fuel—it’s an
                    experience. Our mission is to bring joy and satisfaction to every meal
                    you order. With a team of passionate chefs, delivery experts, and
                    customer support staff, we make sure your experience is smooth from
                    kitchen to doorstep.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    From gourmet dishes to comfort food, we’ve got something for everyone.
                    Whether you’re ordering lunch at work, dinner for the family, or a
                    sweet midnight snack, Foodie has your cravings covered.
                </p>
            </section>

            {/* Our Team */}
            <section className="py-16 max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-10">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div
                        className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                    >
                        <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 mb-4"></div>
                        <h3 className="text-xl font-semibold text-blue-900">
                            Privilege Oyegbile
                        </h3>
                        <p className="text-gray-600">CEO</p>
                    </div>
                    <div
                        className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                    >
                        <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 mb-4"></div>
                        <h3 className="text-xl font-semibold text-blue-900">
                            Eunice omolola
                        </h3>
                        <p className="text-gray-600">Master chef</p>
                    </div>
                    <div
                        className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                    >
                        <div className="w-24 h-24 mx-auto rounded-full bg-blue-200 mb-4"></div>
                        <h3 className="text-xl font-semibold text-blue-900">
                            Privilege Oyegbile
                        </h3>
                        <p className="text-gray-600">CEO</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-blue-50 text-center">
                <div class="py-16 bg-blue-50 text-center">
                    <h2 class="text-3xl font-bold text-blue-900 mb-10">
                        What Our Customers Say
                    </h2>

                    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">"Best delivery service ever!"</p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ </div>
                            <p class="mt-3 text-blue-900 font-semibold">Sarah Johnson</p>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">"The food is always fresh and tasty!"</p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <p class="mt-3 text-blue-900 font-semibold">Michael Lee</p>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">
                                "Love the burgers 🍔, highly recommend."
                            </p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ </div>
                            <p class="mt-3 text-blue-900 font-semibold">Aisha Bello</p>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">"Fast delivery and amazing service."</p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <p class="mt-3 text-blue-900 font-semibold">David Kim</p>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">
                                "Great variety of meals, I’m never bored!"
                            </p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <p class="mt-3 text-blue-900 font-semibold">Emily Garcia</p>
                        </div>

                        <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                            <p class="italic text-gray-700">
                                "The ice cream is out of this world 🍦"
                            </p>
                            <div class="mt-4 text-yellow-400 font-bold">⭐ ⭐ ⭐ ⭐ ⭐</div>
                            <p class="mt-3 text-blue-900 font-semibold">James Smith</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="bg-blue-900 text-white text-center py-6 mt-12">
                <p>&copy; 2025 Foodie. All rights reserved.</p>
            </footer>
        </div>
    );
}
