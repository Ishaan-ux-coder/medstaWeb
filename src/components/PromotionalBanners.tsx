"use client";
import React from 'react';

export default function PromotionalBanners() {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Banner 1: App Download */}
                <div className="rounded-2xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-between shadow-md hover:shadow-lg transition-all border border-blue-100 group h-64">
                    {/* Content */}
                    <div className="z-10 relative">
                        <div className="mb-4 relative">
                            {/* "Extra" handwritten style */}
                            <span className="absolute -top-6 -left-4 text-red-500 font-cursive text-3xl font-bold -rotate-12 transform" style={{ fontFamily: 'cursive' }}>Extra</span>

                            <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1a1a2e] leading-none">
                                <span className="relative inline-block">
                                    <span className="relative z-10">Same</span>
                                    <span className="absolute left-0 top-1/2 w-full h-1 bg-red-500 -rotate-6"></span>
                                </span> Bachat,<br />
                                Sirf <span className="text-green-600">App</span> Par!
                            </h3>
                        </div>
                        <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-500 transition-colors uppercase text-sm tracking-wide transform hover:scale-105 duration-200">
                            Download Now
                        </button>
                    </div>

                    {/* Abstract Receipt/Coupon Graphic */}
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl border-t-8 border-green-500 w-44 text-center transform rotate-6 group-hover:rotate-0 transition-transform duration-300">
                        <div className="border-b-2 border-dashed border-gray-200 pb-2 mb-2">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Exclusive Coupon</div>
                            <div className="text-xs font-bold text-gray-800">GET FLAT</div>
                        </div>
                        <div className="text-5xl font-black text-green-600 leading-none mb-1">27%<br /><span className="text-2xl">OFF</span></div>
                        <div className="text-xs font-bold text-blue-900 mb-2">+ 1% CASHBACK</div>
                        <div className="bg-gray-100 py-1.5 rounded border border-dashed border-gray-300">
                            <span className="text-[10px] text-gray-500 mr-1">USE:</span>
                            <span className="font-bold text-black font-mono">TRUAPP28</span>
                        </div>
                    </div>
                </div>

                {/* Banner 2: Lowest Price */}
                <div className="rounded-2xl overflow-hidden relative bg-gradient-to-r from-blue-600 to-blue-800 p-8 flex items-center shadow-md hover:shadow-lg transition-all h-64 text-white">
                    <div className="z-10 w-2/3">
                        <h3 className="text-3xl lg:text-4xl font-black uppercase italic tracking-wider mb-2 drop-shadow-md leading-none">
                            Lowest Price<br />Guaranteed
                        </h3>
                        <p className="text-xs lg:text-sm font-medium mb-4 text-blue-100 opacity-90 max-w-xs">
                            FOUND A LOWER PRICE ONLINE? WE'LL PAY THE DIFFERENCE IN TM CASH UP TO
                        </p>
                        <div className="inline-block bg-white text-blue-800 px-4 py-1 rounded-lg transform -skew-x-12 shadow-lg">
                            <span className="text-4xl font-black transform skew-x-12 inline-block">₹500</span>
                        </div>
                    </div>

                    {/* Decorative Elements replacing the specific person image */}
                    <div className="absolute bottom-0 right-0 w-1/3 h-full flex items-end justify-center z-0">
                        {/* Placeholder for the person image */}
                        <span className="text-9xl filter drop-shadow-2xl transform translate-y-4">👨🏽</span>
                    </div>

                    {/* Floating Icons */}
                    <div className="absolute top-4 right-10 text-yellow-400 text-3xl animate-bounce" style={{ animationDuration: '2s' }}>🎫</div>
                    <div className="absolute bottom-10 left-[60%] text-blue-300 text-2xl animate-pulse">🛡️</div>
                </div>
            </div>
        </section>
    );
}
