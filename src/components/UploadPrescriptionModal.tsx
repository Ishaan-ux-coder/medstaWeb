import { motion } from 'framer-motion';
import { FaFileUpload, FaHistory, FaInfoCircle, FaCheckCircle, FaUserNurse } from 'react-icons/fa';

interface UploadPrescriptionModalProps {
    onClose: () => void;
}

export default function UploadPrescriptionModal({ onClose }: UploadPrescriptionModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
        >
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl overflow-hidden relative flex flex-col md:flex-row">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Main Content Container */}
                <div className="flex flex-col md:flex-row w-full">

                    {/* Left Column: Input text & Selection */}
                    <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload your prescription to start ordering</h2>
                            <p className="text-gray-500 text-sm">Please ensure that the prescription is valid and contains doctor, patient and medicine details.</p>
                        </div>

                        {/* Selection Buttons */}
                        <div className="flex gap-4 mb-8">
                            <button className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-blue-700 hover:bg-blue-100 transition-colors">
                                <FaFileUpload className="text-2xl" />
                                <span className="font-semibold text-sm">Upload Prescription</span>
                            </button>
                            <button className="flex-1 bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-colors">
                                <FaHistory className="text-2xl" />
                                <span className="font-semibold text-sm">Past Prescription</span>
                            </button>
                        </div>

                        {/* Info Box */}
                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 mb-8">
                            <div className="flex items-start gap-3">
                                <FaInfoCircle className="text-blue-500 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-700 text-sm mb-2">Please keep in mind:</h4>
                                    <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                                        <li>Prescription should be valid and contains doctor, patient, date and medicine details</li>
                                        <li>Supported formats: JPG, JPEG, PNG, PDF, WebP, HEIF and HEIC</li>
                                        <li>File size must be under 5 MB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Pharmacist Call Footer - Mobile only (hidden on desktop maybe? Or usually at bottom) - Design shows at bottom spanning width? No, design shows it under info box? Or bottom of screen? Let's simply place it here for layout. 
               Wait, design image has it at bottom full width? No, looks like it's inside the left panel or below it?
               Actually, looking at the crop, it's a separate card at the bottom.
            */}
                        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="bg-yellow-100 p-2 rounded-full">
                                    <FaUserNurse className="text-yellow-600 text-xl" />
                                    {/* Or text user avatar placeholder */}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800 text-sm flex items-center gap-2">
                                        Pharmacist call
                                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">Free</span>
                                    </div>
                                    <div className="text-xs text-gray-500">Our pharmacist will call to confirm the medicines in your prescription</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Illustration & Proceed */}
                    <div className="w-full md:w-5/12 bg-white flex flex-col items-center justify-center p-8 md:p-10 relative">
                        {/* Illustration Placeholder */}
                        <div className="mb-8 relative w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center">
                            {/* Abstract graphic representation */}
                            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
                            <div className="relative z-10 text-9xl">📄</div>
                            <div className="absolute bottom-0 right-0 text-6xl drop-shadow-lg">💊</div>
                        </div>

                        <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all hover:-translate-y-1">
                            Proceed
                        </button>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
