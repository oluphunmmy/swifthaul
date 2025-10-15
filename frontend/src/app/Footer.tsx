export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center text-sm">
        <p>© {new Date().getFullYear()} SwiftHaul Logistics. All rights reserved.</p>
        <p className="text-green-100 mt-1">Smart Delivery for Urban Communities</p>
      </div>
    </footer>
  );
}
