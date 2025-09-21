'use client';
import { useEffect, useState } from 'react';

const launchDate = new Date('2025-12-01T00:00:00');

function getCountdown() {
  const now = new Date();
  const diff = launchDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function ComingSoon() {
  const [countdown, setCountdown] = useState(getCountdown());
  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="py-20 bg-gradient-to-br from-primary-cream to-green-100">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary-green tracking-tight">Coming Soon</h2>
        <div className="text-lg mb-8 text-green-700">Medsta launches in:</div>
        <div className="flex justify-center gap-6 text-2xl font-mono mb-8">
          <div className="bg-white rounded-lg px-4 py-2 shadow text-green-700"><span className="font-bold text-green-900">{countdown.days}</span> days</div>
          <div className="bg-white rounded-lg px-4 py-2 shadow text-green-700"><span className="font-bold text-green-900">{countdown.hours}</span> hrs</div>
          <div className="bg-white rounded-lg px-4 py-2 shadow text-green-700"><span className="font-bold text-green-900">{countdown.minutes}</span> min</div>
          <div className="bg-white rounded-lg px-4 py-2 shadow text-green-700"><span className="font-bold text-green-900">{countdown.seconds}</span> sec</div>
        </div>
        <div className="mb-8 text-base text-green-900">Upcoming: <span className="font-semibold text-green-700">AI medical history analyzer</span>, telehealth expansion, and more!</div>
        <form className="flex flex-col md:flex-row gap-3 justify-center items-center max-w-md mx-auto bg-white rounded-xl shadow p-4">
          <input type="email" placeholder="Join waitlist (Email)" className="border border-green-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300" required />
          <button type="submit" className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2 px-8 rounded-lg shadow hover:from-green-700 hover:to-green-600 transition-all font-semibold">Join Waitlist</button>
        </form>
        <div className="text-xs text-gray-500 mt-4">Get notified when we launch!</div>
      </div>
    </section>
  );
}