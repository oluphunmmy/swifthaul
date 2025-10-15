"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = false; // Replace with actual auth logic
    if (!isLoggedIn) {
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-green-700">Checkout</h1>
      <p className="text-gray-600 mt-4">
        Redirecting to login if not authenticated...
      </p>
    </div>
  );
}
