import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">ALX Listing App</h1>

      <div className="mb-6">
        <Card
          title="Cozy Apartment"
          description="A comfortable apartment located in the city center with amazing amenities."
          image="/assets/sample-property.jpg"
        />
      </div>

      <Button
        label="View Details"
        onClick={() => alert("Viewing details...")}
      />
    </div>
  );
}
