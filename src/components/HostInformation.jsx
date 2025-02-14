import React from "react";


export default function HostInformation() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Host Information</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {/* Full Name */}
        <div>
          <div className="text-gray-500 mb-2">Full Name</div>
          <div>Kasy Jonan</div>
        </div>

        {/* Phone Number */}
        <div>
          <div className="text-gray-500 mb-2">Phone Number</div>
          <div>0704393827</div>
        </div>

        {/* Email Address */}
        <div className="col-span-2">
          <div className="text-gray-500 mb-2">Email Address</div>
          <div>kasyjonan@mail.com</div>
        </div>
      </div>
    </Card>
  );
}
