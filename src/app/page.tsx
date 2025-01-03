"use client";

import React from "react";
import AddWineButton from "./components/AddWineButton";
import WineDropdown from "./components/WineDropdown";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Wine Manager</h1>
      <WineDropdown />
      <AddWineButton />
    </div>
  );
};

export default Page;
