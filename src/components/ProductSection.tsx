"use client";
import React, { useRef } from 'react';
import { FaChevronRight, FaChevronLeft, FaHome, FaStar } from 'react-icons/fa';

interface Product {
    id: number;
    name: string;
    image: string; // URL or placeholder
    discount: string;
    mrp: string;
    price: string;
    substituteSavings?: string;
}

interface ProductSectionProps {
    title: string;
    icon?: React.ReactNode;
    products: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="min-w-[200px] md:min-w-[240px] bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden relative group">
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-green-700 text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10">
                {product.discount} OFF
            </div>

            <div className="p-4 flex flex-col gap-3">
                {/* Image Placeholder */}
                <div className="h-32 w-full flex items-center justify-center bg-gray-50 rounded-lg mb-2 relative">
                    <span className="text-4xl">💊</span>
                    {/* Actual Image would go here: <img src={product.image} className="h-full object-contain" /> */}
                </div>

                {/* Title */}
                <h3 className="font-medium text-gray-800 text-sm line-clamp-2 h-10 leading-snug">
                    {product.name}
                </h3>

                {/* Pricing */}
                <div className="mt-1">
                    <div className="text-xs text-gray-400 line-through">MRP {product.mrp}</div>
                    <div className="font-bold text-gray-900 text-lg">₹{product.price}</div>
                </div>

                {/* Add Button */}
                <button className="w-full border border-blue-500 text-blue-600 font-bold py-1.5 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                    Add
                </button>
            </div>

            {/* Substitute Savings Banner */}
            {product.substituteSavings && (
                <div className="bg-purple-50 px-3 py-2 border-t border-purple-100 flex justify-between items-center cursor-pointer hover:bg-purple-100 transition-colors">
                    <span className="text-[10px] text-purple-700 font-bold">Save {product.substituteSavings} with Substitute</span>
                    <span className="text-purple-700 text-xs">›</span>
                </div>
            )}
        </div>
    );
};

export default function ProductSection({ title, icon, products }: ProductSectionProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        {title} {icon}
                    </h2>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                            <FaChevronLeft />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-md">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>

                <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
        `}</style>
            </div>
        </section>
    );
}
