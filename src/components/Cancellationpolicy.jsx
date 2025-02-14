import React from "react";

export default function CancellationPolicy() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Cancellation Policy</h3>
      <ul className="text-sm space-y-2 text-muted-foreground">
        <li>Cancellations made 24 hours before the pick-up time are eligible for a full refund.</li>
        <li>Cancellations made less than 24 hours before the pick-up time will incur a 50% cancellation fee.</li>
        <li>No shows or cancellations after the pick-up time are non-refundable.</li>
      </ul>
    </Card>
  )
}

