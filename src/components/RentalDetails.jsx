import React from "react";


export default function RentalDetails() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Rental Details</h3>
      <div className="space-y-4">
        {/* Pick-up & Return Date/Time */}
        <div>
          <div className="text-gray-600 mb-2">Pick up & Return Date/Time</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-600">From</div>
              <div>12/02/2025</div>
              <div>15:00 PM</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">To</div>
              <div>13/02/2025</div>
              <div>12:00 PM</div>
            </div>
          </div>
        </div>

        {/* Pick-up & Return Location */}
        <div>
          <div className="text-gray-600 mb-2">Pick up & Return Location</div>
          <div>Upper Kololo, Kampala</div>
          <div>Acacia, Kampala</div>
        </div>

        {/* Total Days/Hours */}
        <div>
          <div className="text-gray-600 mb-2">Total days/Hours</div>
          <div>1 day, 5 hours</div>
        </div>
      </div>
    </Card>
  );
}
