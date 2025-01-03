"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {currentYear} Guess The Glass</p>
    </footer>
  );
};

export default Footer;
