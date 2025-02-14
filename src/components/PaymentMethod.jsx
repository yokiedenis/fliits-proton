import React from "react";


export default function PaymentMethod() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Payment Method</h3>
      <div className="flex gap-4">
        {/* Cash Option */}
        <div className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100">
          Cash
        </div>

        {/* Visa Payment Option */}
        <div className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100">
          <img src="/visa-logo.svg" alt="Visa" width={40} height={24} />
        </div>

        {/* Airtel Money Option */}
        <div className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100">
          <img src="/airtel-money.svg" alt="Airtel Money" width={40} height={24} />
        </div>

        {/* Mobile Money Option */}
        <div className="px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100">
          <img src="/mobile-money.svg" alt="Mobile Money" width={40} height={24} />
        </div>
      </div>
    </Card>
  );
}
