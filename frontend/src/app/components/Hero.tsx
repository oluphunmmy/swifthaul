import { FaMapMarkedAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-green-50 text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-6">
          SwiftHaul Logistics
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Making urban delivery smarter, faster, and more affordable.  
          Connect with reliable drivers and move your goods with ease across your city.
        </p>
        <a
          href="#"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Get Started
        </a>

        <div className="mt-10 flex justify-center text-green-700 gap-2 items-center">
          <FaMapMarkedAlt />
          <span>Serving Agege, Iju-Ishaga & Urban Lagos</span>
        </div>
      </div>
    </section>
  );
}
