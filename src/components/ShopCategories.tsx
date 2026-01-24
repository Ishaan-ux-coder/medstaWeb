'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

// Dummy data for categories and their products
const categories = [
    {
        id: 'personal',
        name: 'Personal Care',
        image: '/categories/personal_care.png', // Placeholder
        products: [
            { name: 'Skin Care', image: '/products/skin.png' },
            { name: 'Hair Care', image: '/products/hair.png' },
            { name: 'Oral Care', image: '/products/oral.png' },
            { name: 'Bath & Body', image: '/products/bath.png' },
        ]
    },
    {
        id: 'health',
        name: 'Health Conditions',
        image: '/categories/health.png',
        products: [
            { name: 'Stomach Care', image: '/products/stomach.png' },
            { name: 'Heart Care', image: '/products/heart.png' },
            { name: 'Pain Relief', image: '/products/pain.png' },
            { name: 'Eye Care', image: '/products/eye.png' },
        ]
    },
    {
        id: 'vitamins',
        name: 'Vitamins & Supplements',
        image: '/categories/vitamins.png',
        products: [
            { name: 'Multivitamins', image: '/products/multi.png' },
            { name: 'Keep Fit', image: '/products/fit.png' },
            { name: 'Protein', image: '/products/protein.png' },
        ]
    },
    {
        id: 'diabetes',
        name: 'Diabetes Care',
        image: '/categories/diabetes.png',
        products: [
            { name: 'Devices', image: '/products/diabetic_device.png' },
            { name: 'Sugar Substitutes', image: '/products/sugar_free.png' },
            { name: 'Diabetic Footwear', image: '/products/footwear.png' },
        ]
    },
    {
        id: 'devices',
        name: 'Healthcare Devices',
        image: '/categories/devices.png',
        products: [
            { name: 'BP Monitors', image: '/products/bp.png' },
            { name: 'Oximeters', image: '/products/oximeter.png' },
            { name: 'Thermometers', image: '/products/thermometer.png' },
        ]
    },
    {
        id: 'homeopathy',
        name: 'Homeopathic Medicine',
        image: '/categories/homeopathy.png',
        products: [
            { name: 'Homeopathy for Skin Care', image: '/products/homeo_skin.png' },
            { name: 'Homeopathy Digestive Care', image: '/products/homeo_digestive.png' },
            { name: 'Homeopathy for Seniors', image: '/products/homeo_senior.png' },
            { name: 'Homeopathy Heart Care', image: '/products/homeo_heart.png' },
            { name: 'Homeopathy Kidney Care', image: '/products/homeo_kidney.png' },
            { name: 'Homeopathy Sexual Health', image: '/products/homeo_sexual.png' },
        ]
    },
];

export default function ShopCategories() {
    const [selectedCat, setSelectedCat] = useState(categories[5]); // Default to Homeopathy as per image

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-black tracking-tight">Shop by categories</h2>
                    {/* Can add View All link if needed */}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column: Categories List */}
                    <div className="w-full md:w-1/4 flex flex-col space-y-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCat(cat)}
                                className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left relative group
                  ${selectedCat.id === cat.id
                                        ? 'bg-orange-50/80 border-l-4 border-orange-500 shadow-sm'
                                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                                    }`}
                            >
                                <div className="w-12 h-12 relative flex-shrink-0 bg-white rounded-full p-2 border border-gray-100 flex items-center justify-center">
                                    {/* Placeholder Logic */}
                                    <span className="text-xl">🧴</span>
                                </div>
                                <span className={`font-semibold text-lg ${selectedCat.id === cat.id ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                                    {cat.name}
                                </span>

                                {/* Visual indicator connection to right panel */}
                                {selectedCat.id === cat.id && (
                                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-4 h-4 bg-orange-50 rotate-45 hidden md:block z-10"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Products Grid */}
                    <div className="w-full md:w-3/4 bg-orange-50/50 rounded-3xl p-8 relative min-h-[500px]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {selectedCat.products.map((prod, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center">
                                    <h4 className="font-semibold text-gray-700 mb-4 h-12 flex items-center justify-center">{prod.name}</h4>
                                    <div className="h-40 w-full bg-gray-50 rounded-lg mb-4 flex items-center justify-center">
                                        {/* Placeholder */}
                                        <span className="text-5xl">📦</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                                View all {selectedCat.name.toLowerCase()} products <FaChevronRight className="text-xs" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
