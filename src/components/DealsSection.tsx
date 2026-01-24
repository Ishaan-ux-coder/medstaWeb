'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const products = [
    {
        id: 1,
        name: 'Diataal Nutripop Multivitamin Hair & Skin',
        mrp: '213.56',
        price: '170.85',
        discount: '20% OFF',
        image: '/deals/1.png', // Placeholder, will fallback or use general icon if missing
    },
    {
        id: 2,
        name: 'Diataal-d Multivitamin Vit. D & Ala Sustained Energy',
        mrp: '118.77',
        price: '106.89',
        discount: '10% OFF',
        image: '/deals/2.png',
    },
    {
        id: 3,
        name: 'Fericip Xt Tablet 10',
        mrp: '126.17',
        price: '63.11',
        discount: '50% OFF',
        image: '/deals/3.png',
    },
    {
        id: 4,
        name: 'Follihair A Tablet 15',
        mrp: '398.64',
        price: '318.91',
        discount: '20% OFF',
        image: '/deals/4.png',
    },
    {
        id: 5,
        name: 'Gemsoline D3 Nano Shot Litchi Flavour Sugar Free',
        mrp: '69.47',
        price: '34.67',
        discount: '50% OFF',
        image: '/deals/5.png',
    },
    {
        id: 6,
        name: 'Intagesic Spray 55gm',
        mrp: '193.59',
        price: '118.09',
        discount: '39% OFF',
        image: '/deals/6.png',
    },
    {
        id: 7,
        name: 'Lupin Vimpro Vanilla Flavour Powder Jar',
        mrp: '804.41',
        price: '659.62',
        discount: '18% OFF',
        image: '/deals/7.png',
    }
];

export default function DealsSection() {
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
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-black flex items-center gap-2">
                        Deals you'll love <span className="text-red-500">❤️</span>
                    </h2>
                    <p className="text-black mt-1">Buy now to get the best deals</p>
                </div>

                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-gray-600 hover:text-blue-600 border border-gray-100 hidden md:block"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 shadow-lg rounded-full p-3 text-white hover:bg-blue-700 border border-transparent hidden md:block"
                >
                    <FaChevronRight />
                </button>

                {/* Products Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide px-2 snap-x"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-[220px] md:min-w-[240px] bg-white rounded-xl p-4 border border-gray-100 hover:shadow-xl transition-shadow duration-300 snap-start flex flex-col justify-between"
                        >
                            <div className="relative mb-4">
                                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                                    {product.discount}
                                </span>
                                <div className="h-32 w-full relative mt-4 bg-gray-50 rounded-lg flex items-center justify-center">
                                    {/* Placeholder for image since we don't have real assets yet */}
                                    <span className="text-4xl">💊</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-2 min-h-[40px]" title={product.name}>
                                    {product.name}
                                </h3>

                                <div className="flex items-end justify-between mt-2">
                                    <div>
                                        <div className="text-xs text-gray-400 line-through">MRP ₹{product.mrp}</div>
                                        <div className="text-lg font-bold text-gray-900">₹{product.price}</div>
                                    </div>
                                    <button className="text-blue-600 border border-blue-200 hover:bg-blue-50 px-4 py-1 rounded text-sm font-semibold transition-colors">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
