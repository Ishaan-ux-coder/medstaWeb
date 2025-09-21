import { FaPercent, FaGift, FaUserPlus } from 'react-icons/fa';

const offers = [
	{
		icon: <FaPercent className="text-green-500 text-3xl" />,
		title: 'Up to 40% OFF',
		desc: 'On medicines, lab tests, and first consultations.',
	},
	{
		icon: <FaGift className="text-green-500 text-3xl" />,
		title: 'Early-bird Offers',
		desc: 'Special subscription offers for pre-registered users.',
	},
	{
		icon: <FaUserPlus className="text-green-500 text-3xl" />,
		title: 'Provider Discounts',
		desc: 'Exclusive onboarding discounts for providers.',
	},
];

export default function OffersDiscounts() {
	return (
		<section
			className="py-16"
			style={{
				background:
					'linear-gradient(120deg, #b2f7ef 0%, #c2e9fb 50%, #a1c4fd 100%)',
			}}
		>
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-4xl font-bold text-center mb-10 text-green-700 tracking-tight">
					Offers & Discounts
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{offers.map((o, i) => (
						<div
							key={i}
							className="bg-white rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition"
						>
							{o.icon}
							<h3 className="mt-4 text-xl font-semibold mb-2 text-green-700">
								{o.title}
							</h3>
							<p className="text-gray-600 text-center">{o.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
