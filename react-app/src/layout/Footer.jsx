import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
