"use client";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Icon */}
        <div className="flex items-center">
          <img
            src="/wine-icon.svg"
            alt="Wine Glass Icon"
            className="color-white h-8 w-8 mr-3"
          />
          <span className="hidden sm:block text-lg font-bold">
            Guess the Glass
          </span>
        </div>

        {/* Center: App Name */}
        <h1 className="text-xl font-semibold text-center sm:hidden">
          Guess the Glass
        </h1>

        {/* Right: Button */}
        <button
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
          onClick={() => alert("Button Clicked!")} // Replace with your action
        >
          Action
        </button>
      </div>
    </header>
  );
};

export default Header;
