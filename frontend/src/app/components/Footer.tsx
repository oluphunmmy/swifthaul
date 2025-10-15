export default function Footer() {
  return (
    <footer className="bg-swiftDark text-white text-center py-6 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} SwiftHaul Logistics. All rights reserved.
      </p>
      <p className="text-swiftLight mt-1">Smart Delivery for Urban Communities</p>
    </footer>
  );
}
