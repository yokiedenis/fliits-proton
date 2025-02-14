import React from "react";


export default function PriceDetails() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Price Details</h3>
      <div className="space-y-2">
        {/* Price Breakdown */}
        <div className="flex justify-between">
          <span>Base Price</span>
          <span>Ksh 2500</span>
        </div>
        <div className="flex justify-between">
          <span>Tax & Service fee</span>
          <span>Ksh 300</span>
        </div>
        <div className="flex justify-between">
          <span>Insurance Charges</span>
          <span>Ksh 500</span>
        </div>
        <div className="flex justify-between">
          <span>Fuel Charges</span>
          <span>Ksh 900</span>
        </div>
        <div className="flex justify-between">
          <span>Discounts</span>
          <span>-Ksh 250</span>
        </div>

        {/* Total Price */}
        <div className="border-t pt-2 mt-4">
          <div className="flex justify-between font-semibold">
            <span>Total Price</span>
            <span>Ksh 3950</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
