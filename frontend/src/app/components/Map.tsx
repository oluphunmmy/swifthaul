"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function Map() {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-md background-none">
      <DynamicMap />
    </div>
  );
}
