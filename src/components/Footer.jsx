import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and description */}
                    <div className="col-span-1">
                        <div className="flex items-center mb-4">
                            <svg
                                className="h-8 w-8 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-500">
                            Significantly enhance your screening and recruitment
                            procedures.
                        </p>
                    </div>

                    {/* Navigation links */}
                    <div className="col-span-1">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-lg font-semibold text-indigo-900"
                                >
                                    Product
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-lg font-semibold text-indigo-900"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-lg font-semibold text-indigo-900"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-lg font-semibold text-indigo-900"
                                >
                                    Use case
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-lg font-semibold text-indigo-900"
                                >
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Apps
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Learn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Integrations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Our Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Press
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between">
                    <p className="text-sm text-gray-400">
                        Hirevision • Copyright © 2023
                    </p>
                    <div className="mt-4 sm:mt-0">
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-gray-500 mr-4"
                        >
                            Terms of service
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-gray-500"
                        >
                            Privacy policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
