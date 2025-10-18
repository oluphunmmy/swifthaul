"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Navbar from "./nav";
import Footer from "./components/Footer";

const Map = dynamic(() => import("./components/Map"), { ssr: false });

export default function HomePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [fare, setFare] = useState<number | null>(null);

  const calculateFare = () => {
    if (!pickup || !dropoff) return;
    const baseFare = 800;
    const distanceFactor = Math.floor(Math.random() * 500);
    setFare(baseFare + distanceFactor);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white overflow-hidden">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Hero Section with Map */}
        <section className="relative pt-[72px] bg-white">
          <div className="h-[70vh] w-full">
            <Map />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Urban Hauling</h1>
            <p className="text-lg md:text-xl font-medium">
              Deliver faster. Move smarter. Go SwiftHaul.
            </p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="flex justify-center py-12 px-4 bg-white -mt-[2px]">
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-swiftGreen mb-4 text-center">
              Book a Haul
            </h2>
            <p className="text-gray-600 mb-4 text-center">
              Fast, safe, and affordable urban delivery.
            </p>

            <input
              type="text"
              placeholder="Pickup Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-swiftGreen outline-none"
            />
            <input
              type="text"
              placeholder="Drop-off Location"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-swiftGreen outline-none"
            />

            {fare && (
              <p className="mb-3 text-swiftGreen font-semibold text-center">
                Estimated Fare: ₦{fare.toLocaleString()}
              </p>
            )}

            <button
              onClick={calculateFare}
              className="w-full bg-swiftGreen text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Get Fare Estimate
            </button>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
