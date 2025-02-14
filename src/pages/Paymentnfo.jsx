import React from "react";
import BookingSummary from "../components/Bookingsummary.jsx";
import HostInformation from "../components/HostInformation.jsx";
import RentalDetails from "../components/RentalDetails.jsx";
import PaymentMethod from "../components/PaymentMethod.jsx";
import CancellationPolicy from "../components/Cancellationpolicy.jsx";
import PriceDetails from "../components/PriceDetails.jsx";
import { ChevronLeft } from "lucide-react";


export default function PaymentInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <button className="hover:bg-gray-100 p-2 rounded-full">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img src="/flits-logo.svg" alt="Flits" width={80} height={32} />
          <div className="w-10 h-10 rounded-full bg-gray-200" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <BookingSummary />
            <HostInformation />
            <RentalDetails />
            <PaymentMethod />
            <CancellationPolicy />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <PriceDetails />
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start space-x-2 mb-4">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  By clicking this, I agree to FLITS Terms & Conditions and Privacy Policy.
                </label>
              </div>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                Confirm and Pay
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
