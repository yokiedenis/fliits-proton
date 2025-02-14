import React from "react"



export default function BookingSummary() {
  return (
    <Card className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative w-full md:w-48 h-32">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20141827-KZDtqx91ASXOHxzxIuEWPX2SlukvBv.png"
            alt="Mercedes Benz GLE 635 2021"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold">Mercedes Benz GLE 635 2021</h3>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>SUV</span>
            <span>Diesel</span>
            <span>5 seats</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>Features:</div>
            <div className="text-muted-foreground">
              <div>Automatic</div>
              <div>All-wheel drive</div>
              <div>Air Conditioning</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

